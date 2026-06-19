import React, { useState, useEffect } from "react";
import usdt from "../../assets/usdt.png";
import ss from "../../assets/logo.png";
import bgImage from "../../assets/bgbuy.png";
import { Link } from "react-router-dom";
import Header from "../Navbar";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./connect";

import {
  useAppKit,
  useAppKitAccount,
  useAppKitProvider,
} from "@reown/appkit/react";
import { BrowserProvider, Contract, ethers } from "ethers";
import {
  MIN_INVESTMENT_USD,
  USDT_ADDRESS,
  PRESALE_ADDRESS,
  TOKEN_ADDRESS,
} from "./utils/constants";
import { PRESALE_ABI, TOKEN_ABI, USDT_ABI } from "./utils/presaleABI";

const PRIMARY_RPC_URL = "https://bsc-dataseed.binance.org/";
const FALLBACK_RPC_URL = "https://bsc-dataseed.binance.org/";
const publicProvider = new ethers.JsonRpcProvider(PRIMARY_RPC_URL);

export default function TokenSaleSection() {
  const { address } = useAppKitAccount();
  const { open } = useAppKit();
  const { walletProvider } = useAppKitProvider("eip155");
  const [loading, setLoading] = useState(false);
  const [totalSold, setTotalSold] = useState("0");
  const [totalRaised, setTotalRaised] = useState("0");
  const [progressPercent, setProgressPercent] = useState(0);
  const [price, setPrice] = useState(0);
  const [isApproved, setIsApproved] = useState(false);
  const [usdtAmount, setUsdtAmount] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");
  const [error, setError] = useState("");
  // const [bnbBalance, setBnbBalance] = useState("0");
  const [usdtBalance, setUsdtBalance] = useState("0");
  const [smcBalance, setSMCBalance] = useState("0");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isPresaleActive, setIsPresaleActive] = useState(true);

  // Calculate token amount based on USDT input
  const calculateTokenAmount = (usdt) => {
    const usdtNum = parseFloat(usdt) || 0;
    const tokenPrice = parseFloat(price);
    if (tokenPrice === 0) return (0).toFixed(6);
    return (usdt / tokenPrice).toFixed(6);
  };

  const [usdtPlaceholder, setUsdtPlaceholder] = useState("USDT YOU PAY");
  const [semiconPlaceholder, setSemiconPlaceholder] = useState(
    "SEMICON YOU RECEIVE",
  );

  // Handle USDT input

  const handleUsdtInput = (value) => {
    let cleanedValue = value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*?)\./g, "$1");

    // ✅ Limit to 2 decimal places
    if (cleanedValue.includes(".")) {
      const [integerPart, decimalPart] = cleanedValue.split(".");
      cleanedValue = integerPart + "." + decimalPart.slice(0, 2);
    }

    if (cleanedValue && Number(cleanedValue) < 0) {
      toast.error("Amount cannot be negative", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    if (cleanedValue && Number(cleanedValue) > 1000000) {
      toast.error("Amount exceeds maximum limit", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    setUsdtAmount(cleanedValue);

    if (cleanedValue && !isNaN(cleanedValue)) {
      // ✅ Round token amount to 2 decimals
      const calculated = calculateTokenAmount(cleanedValue);
      setTokenAmount(parseFloat(calculated).toFixed(2));
    } else {
      setTokenAmount("");
      if (value && cleanedValue === "") {
        toast.error("Please enter a valid number", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    }
  };

  console.log("USDT Amount:", usdtAmount);
  console.log("Token Amount:", tokenAmount);

  // Fetch USDT balance
  const fetchUsdtBalance = async () => {
    if (!address) return;
    try {
      const ethersProvider = new BrowserProvider(walletProvider);
      const signer = await ethersProvider.getSigner();
      const usdtContract = new Contract(USDT_ADDRESS, USDT_ABI, signer);
      const balance = await usdtContract.balanceOf(address);
      setUsdtBalance(ethers.formatUnits(balance, 18));
    } catch (error) {
      console.error("Error fetching USDT balance:", error);
      toast.error("Failed to fetch USDT balance", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  // Fetch ABTC balance
  const fetchSMCBalance = async () => {
    if (!address) return;
    try {
      const tokenContract = new Contract(
        TOKEN_ADDRESS,
        TOKEN_ABI,
        publicProvider,
      );
      const balance = await tokenContract.balanceOf(address);
      setSMCBalance(ethers.formatUnits(balance, 18));
    } catch (error) {
      console.error("Error fetching ABTC balance:", error);
      setSMCBalance("0");
      toast.error(
        "Failed to fetch ABTC balance. Ensure the contract supports balanceOf.",
        {
          position: "top-right",
          autoClose: 5000,
        },
      );
    }
  };

  // Fetch presale information with fallback
  const fetchPresaleInfo = async () => {
    try {
      let provider = publicProvider;
      try {
        // Test primary RPC
        await provider.getBlockNumber();
      } catch {
        console.warn("Primary RPC failed, switching to fallback");
        provider = new ethers.JsonRpcProvider(FALLBACK_RPC_URL);
      }

      const presaleContract = new Contract(
        PRESALE_ADDRESS,
        PRESALE_ABI,
        provider,
      );
      const promises = [
        presaleContract.totalTokensSold().catch(() => ethers.BigNumber.from(0)),
        presaleContract
          .totalUSDTCollected()
          .catch(() => ethers.BigNumber.from(0)),
        presaleContract
          .tokensPerUSDT()
          .catch(() => ethers.BigNumber.from(10000)),
      ];

      const [sold, raised, tokenPrice] = await Promise.all(promises);

      const soldInTokens = Number(sold) / 1e18;
      const raisedInUSDT = Number(raised) / 1e18;
      const priceInTokensPerUSDT = Number(tokenPrice) / 10 ** 18;
      const priceInTokensPerUSDTs = priceInTokensPerUSDT
        ? priceInTokensPerUSDT
        : 0;

      setTotalSold(soldInTokens.toFixed(2));
      setTotalRaised(raisedInUSDT.toFixed(2));
      setProgressPercent(
        Math.min((raisedInUSDT.toFixed(2) / 100000) * 100, 100),
      );
      setPrice(priceInTokensPerUSDTs);
      setIsPresaleActive(true);
    } catch (error) {
      console.error("Error fetching presale info:", error);
      setError(
        "Failed to load presale data. Check contract address and network.",
      );
      toast.error(
        "Failed to load presale data. Check contract address and network.",
        {
          position: "top-right",
          autoClose: 5000,
        },
      );
    }
  };

  // Check USDT allowance
  const checkAllowance = async () => {
    if (!address) return;
    try {
      const ethersProvider = new BrowserProvider(walletProvider);
      const signer = await ethersProvider.getSigner();
      const usdtContract = new Contract(USDT_ADDRESS, USDT_ABI, signer);
      const allowance = await usdtContract.allowance(address, PRESALE_ADDRESS);
      const requiredAmount = ethers.parseUnits(usdtAmount || "0", 18);
      setIsApproved(allowance >= requiredAmount);
    } catch (error) {
      console.error("Error checking allowance:", error);
      setError("Failed to check allowance");
      toast.error("Failed to check allowance", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  // Approve USDT
  const approveUSDT = async () => {
    console.log("APPROVE USDT BUTTON CLICKED!");
    if (!address) {
      setError("Please connect your wallet");
      toast.error("Please connect your wallet", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }
    if (
      !isPresaleActive ||
      (timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0)
    ) {
      setError("Presale has ended");
      toast.error("Presale has ended", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }
    if (!usdtAmount || parseFloat(usdtAmount) < MIN_INVESTMENT_USD) {
      setError(`Minimum investment is $${MIN_INVESTMENT_USD}`);
      toast.error(`Minimum investment is $${MIN_INVESTMENT_USD}`, {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }
    setLoading(true);
    setError("");
    try {
      const ethersProvider = new BrowserProvider(walletProvider);
      const signer = await ethersProvider.getSigner();
      const usdtContract = new Contract(USDT_ADDRESS, USDT_ABI, signer);
      const amount = ethers.parseUnits(usdtAmount, 18);
      const tx = await usdtContract.approve(PRESALE_ADDRESS, amount);
      await tx.wait();
      setIsApproved(true);
      toast.success("USDT approved successfully!", {
        position: "top-right",
        autoClose: 5000,
      });
    } catch (error) {
      console.error("Error approving USDT:", error);
      let errorMessage = "Failed to approve USDT";
      
      if (error.code === 4001 || error?.message?.includes("rejected")) {
        errorMessage = "Transaction rejected by user";
      } else if (error.reason) {
        errorMessage = error.reason;
      } else if (error.data && error.data.message) {
        errorMessage = error.data.message;
      } else if (error.message) {
        errorMessage = error.message.slice(0, 50) + "...";
      }
      
      setError(errorMessage);
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  // Buy with USDT
  const buyWithUSDT = async () => {
    if (!address) {
      setError("Please connect your wallet");
      toast.error("Please connect your wallet", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }
    if (
      !isPresaleActive ||
      (timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0)
    ) {
      setError("Presale has ended");
      toast.error("Presale has ended", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }
    if (!usdtAmount || parseFloat(usdtAmount) < MIN_INVESTMENT_USD) {
      setError(`Minimum investment is $${MIN_INVESTMENT_USD}`);
      toast.error(`Minimum investment is $${MIN_INVESTMENT_USD}`, {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }
    if (parseFloat(usdtBalance) < parseFloat(usdtAmount)) {
      setError("Insufficient USDT balance");
      toast.error("Insufficient USDT balance", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }
    setLoading(true);
    setError("");
    try {
      const ethersProvider = new BrowserProvider(walletProvider);
      const signer = await ethersProvider.getSigner();
      const presaleContract = new Contract(
        PRESALE_ADDRESS,
        PRESALE_ABI,
        signer,
      );
      const amount = ethers.parseUnits(usdtAmount, 18);

      let gasLimit;
      try {
        const estimatedGas = await presaleContract.buyWithUSDT.estimateGas(amount);
        gasLimit = (estimatedGas * 120n) / 100n; // 20% buffer
      } catch (gasError) {
        console.warn("Gas estimation failed. Falling back to manual limit.", gasError);
        gasLimit = 500000n; // Fallback gas limit
      }

      const tx = await presaleContract.buyWithUSDT(amount, { gasLimit });
      await tx.wait();
      
      setUsdtAmount("");
      setTokenAmount("");
      await Promise.all([
        fetchPresaleInfo(),
        fetchUsdtBalance(),
        fetchSMCBalance(),
        checkAllowance(), // re-check allowance
      ]);

      toast.success("Purchase successful!", {
        position: "top-right",
        autoClose: 5000,
      });
    } catch (error) {
      console.error("Error buying with USDT:", error);
      let errorMessage = "Failed to complete purchase";
      
      if (error.code === 4001 || error?.message?.includes("rejected")) {
        errorMessage = "Transaction rejected by user";
      } else if (error.reason) {
        errorMessage = error.reason;
      } else if (error.data && error.data.message) {
        errorMessage = error.data.message;
      } else if (error.message) {
        errorMessage = error.message.slice(0, 50) + "..."; // avoid very long messages
      }
      
      setError(errorMessage);
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  // Countdown timer logic
  const calculateTimeLeft = () => {
    const endDate = new Date("2027-04-20T09:00:00+05:30").getTime();
    const now = new Date().getTime();
    const difference = endDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setUsdtPlaceholder("USDT...");
        setSemiconPlaceholder("SMC...");
      } else {
        setUsdtPlaceholder("USDT YOU PAY");
        setSemiconPlaceholder("SEMICON YOU RECEIVE");
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch data and update timer
  useEffect(() => {
    fetchPresaleInfo();
    if (address) {
      Promise.all([fetchUsdtBalance(), fetchSMCBalance(), checkAllowance()]);
    } else {
      setUsdtBalance("0");
      setSMCBalance("0");
      setIsApproved(false);
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [address, usdtAmount]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ zIndex: 9999 }}
      />
      <section
        id="joinpresale"
        className="relative overflow-hidden min-h-screen text-white"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        />

        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/60 z-[1]" /> */}

        {/* Header */}
        <div className="relative z-50">
          <Header />
        </div>

        {/* Main Content */}
        <div className="relative z-20 py-10 md:py-14">
          <div className="max-w-full px-3 font-['Poppins'] sm:px-4 md:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-center">
              {/* LEFT */}
              <div className=" order-1 lg:order-1 flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="inline-block px-3 py-1 text-[#FFCC66] text-sm md:text-base rounded-full mb-2 md:mb-4">
                  SS COIN Presale
                </div>

                <h2 className="text-lg md:text-3xl lg:text-5xl max-w-full lg:max-w-[640px] font-[400] leading-tight">
                  Swift, intelligent Web3 trading with <br />
                  SS COIN: Presale is Live.
                </h2>

                <p className="text-[#FFFFFF80] text-sm md:text-base xl:text-xl mt-3 md:mt-6 max-w-full lg:max-w-[580px]">
                  Become an early supporter of SS Coin and secure your SSC
                  tokens before exchange listings. Participate in a
                  utility-driven ecosystem designed for digital payments,
                  merchant adoption, and global commerce.
                </p>

                <div className="flex flex-wrap justify-center gap-6 mt-5">
                  <a
                    href="/presale/?=joinpresale"
                    className="group relative w-[160px] h-[48px]"
                  >
                    <svg
                      className="absolute inset-0"
                      width="160"
                      height="48"
                      viewBox="0 0 160 48"
                    >
                      <defs>
                        <linearGradient id="grad" x1="0" y1="0" x2="160" y2="0">
                          <stop offset="0%" stopColor="#F0B100" />
                          <stop offset="100%" stopColor="#D08700" />
                        </linearGradient>
                      </defs>

                      <path
                        d="M15 0H160V36L145 48H0V12L15 0Z"
                        fill="url(#grad)"
                        className="group-hover:fill-[#D08700] transition-all duration-300"
                      />
                    </svg>

                    <span className="absolute inset-0 flex items-center justify-center text-white font-medium">
                      Purchse Now
                    </span>
                  </a>
                </div>
              </div>

              {/* RIGHT */}
              <div className=" order-2 lg:order-2 relative w-full max-w-[580px] mx-auto">
                {/* Border SVG */}
                <svg
                  viewBox="0 0 541 517"
                  preserveAspectRatio="none"
                  className="absolute inset-0 w-full h-full"
                  fill="none"
                >
                  <defs>
                    <linearGradient
                      id="borderGradient"
                      gradientUnits="userSpaceOnUse"
                      x1="541"
                      y1="260"
                      x2="0"
                      y2="260"
                    >
                      <stop offset="0.001" stopColor="#F0B100" />
                      <stop offset="0.479" stopColor="#F0B100" />
                      <stop offset="1" stopColor="#D08700" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M494.886 1.5L539.5 57.3506V515.5H46.1143L1.5 459.648V1.5H494.886Z"
                    fill="#000"
                    stroke="url(#borderGradient)"
                    strokeWidth="3"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>

                <div className="relative z-10 px-4 py-8 lg:px-12 lg:py-12 min-h-[480px] lg:min-h-[550px]">
                  <h2 className="text-center text-xl sm:text-2xl lg:text-3xl mb-4 lg:mb-8">
                    You Can Buy With
                  </h2>

                  <div className="flex justify-center mb-4 md:mb-8">
                    <Link to="/presale/?=joinpresale">
                      <button
                        className="
    rounded-full
    p-[1px]
    overflow-hidden
  "
                        style={{
                          background:
                            "linear-gradient(180deg, #363636 0%, #D4AF37 100%)",
                        }}
                      >
                        <div
                          className="
                      flex
                      items-center
                      gap-3
                      px-8
                      py-[10px]
                      rounded-full
                    "
                          style={{
                            background:
                              "linear-gradient(180deg, #363636 0%, #000000 100%)",
                          }}
                        >
                          {/* Icon */}
                          <img
                            src={usdt}
                            alt="USDT"
                            className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                          />

                          {/* Text */}
                          <span
                            className="
                          text-sm
                          lg:text-lg
                          text-white
                          leading-none
                        "
                          >
                            USDT
                          </span>
                        </div>
                      </button>
                    </Link>
                  </div>

                  <div className="space-y-6 ">
                    {/* USDT */}
                    <div>
                      <label className="block mb-3 text-white text-xs min-[395px]:text-sm lg:text-lg font-medium">
                        Amount You Pay
                        <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#F0B100_0%,#D08700_100%)]">
                          {" "}
                          (Balance = {parseFloat(usdtBalance).toFixed(2)} USDT)
                        </span>
                      </label>

                      <div
                        className="relative p-[0.8px]"
                        style={{
                          background:
                            "linear-gradient(90deg, #F0B100 0%, #D08700 100%)",
                          clipPath:
                            "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))",
                        }}
                      >
                        <div
                          className="h-[56px] flex items-center bg-black"
                          style={{
                            clipPath:
                              "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))",
                          }}
                        >
                          {/* Icon */}
                          <div className="w-[52px] md:w-[62px] h-full flex items-center justify-center shrink-0">
                            <img
                              src={usdt}
                              alt=""
                              className="w-5 h-5 md:w-6 md:h-6 object-contain"
                            />
                          </div>

                          {/* Divider */}
                          <div className="w-[1px] h-[100%] bg-[#F0B100]  shrink-0" />

                          <input
                            type="text"
                            placeholder="Enter USDT Amount"
                            value={usdtAmount}
                            onChange={(e) => handleUsdtInput(e.target.value)}
                            className="
                          flex-1
                            min-w-0
                            h-full
                            bg-transparent
                            px-3 md:px-5 text-[10px]
                            min-[330px]:text-sm md:text-base
                            outline-none
                            text-white
                            placeholder:text-[#fff]
                                "
                          />
                        </div>
                      </div>
                    </div>

                    {/* SS Coin */}
                    <div>
                      <label className="block mb-3 text-white text-xs min-[395px]:text-sm lg:text-lg font-medium">
                        Amount You Get
                        <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#F0B100_0%,#D08700_100%)]">
                          {" "}
                          (Balance = {parseFloat(smcBalance).toFixed(2)} SSC)
                        </span>
                      </label>

                      <div
                        className="relative p-[0.8px]"
                        style={{
                          background:
                            "linear-gradient(90deg, #F0B100 0%, #D08700 100%)",
                          clipPath:
                            "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))",
                        }}
                      >
                        <div
                          className="h-[56px] flex items-center bg-black"
                          style={{
                            clipPath:
                              "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))",
                          }}
                        >
                          {/* Icon */}
                          <div className="w-[52px] md:w-[62px] h-full flex items-center justify-center shrink-0">
                            <img
                              src={ss}
                              alt=""
                              className="w-5 h-5 md:w-6 md:h-6 object-contain"
                            />
                          </div>

                          {/* Divider */}
                          <div className="w-[1px] h-[100%] bg-[#F0B100]  shrink-0 " />

                          <input
                            type="text"
                            placeholder="Enter SS Coin Amount"
                            value={tokenAmount}
                            className="
    flex-1
    min-w-0
    h-full
    bg-transparent
    px-3 md:px-5 text-[10px]
    min-[330px]:text-sm md:text-base
    outline-none
    text-[#fff]
    placeholder:text-[#ffff]
  "
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-center  gap-3 md:gap-4">
                      <button
                        className="group relative w-[160px] h-[48px]"
                        onClick={() => open()}
                      >
                        <svg
                          className="absolute inset-0"
                          width="160"
                          height="48"
                          viewBox="0 0 160 48"
                        >
                          <defs>
                            <linearGradient
                              id="grad"
                              x1="0"
                              y1="0"
                              x2="160"
                              y2="0"
                            >
                              <stop offset="0%" stopColor="#F0B100" />
                              <stop offset="100%" stopColor="#D08700" />
                            </linearGradient>
                          </defs>

                          <path
                            d="M15 0H160V36L145 48H0V12L15 0Z"
                            fill="url(#grad)"
                            className="group-hover:fill-[#D08700] transition-all duration-300"
                          />
                        </svg>

                        <span className="absolute inset-0 flex items-center justify-center text-white font-medium">
                          {address
                            ? `${address.slice(0, 4)}...${address.slice(-4)}`
                            : "Connect Wallet"}
                        </span>
                      </button>

                      {/* Whitepaper */}

                      <button
                        type="button"
                        className={`group relative w-[160px] h-[48px] block transition-all duration-300 ${loading ? "opacity-70 cursor-not-allowed" : "hover:scale-105"}`}
                        onClick={isApproved ? buyWithUSDT : approveUSDT}
                        disabled={loading}
                      >
                        <svg
                          className="absolute inset-0 pointer-events-none"
                          width="160"
                          height="48"
                          viewBox="0 0 160 48"
                        >
                          <path
                            d="M15 0H160V36L145 48H0V12L15 0Z"
                            fill="transparent"
                            stroke="#F0B100"
                            className="group-hover:fill-[#F0B100] transition-all duration-300"
                          />
                        </svg>

                        <span className="absolute inset-0 flex items-center justify-center text-[#F0B100] group-hover:text-black font-medium transition-all duration-300 pointer-events-none">
                          {loading
                            ? "Processing..."
                            : isApproved
                              ? "Buy Now"
                              : "Approve USDT"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
