"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────────────────────
 * Types & Interfaces
 * ───────────────────────────────────────────────────────────────────────────── */

export type DownloadAppVariant = "default" | "ImageRight" | "ImageLeft" | "QRAndMedia";

/** Shared media descriptor */
export type DownloadAppMedia = {
  type: "image" | "video";
  src: string;
  poster?: string;
};

/** Base props shared by all variants */
interface BaseDownloadAppProps {
  variant?: DownloadAppVariant;
  heading: string;
  googlePlayUrl: string;
  appStoreUrl: string;
  className?: string;
}

/** Props for default / ImageRight / ImageLeft */
interface StandardDownloadAppProps extends BaseDownloadAppProps {
  variant?: "default" | "ImageRight" | "ImageLeft";
  body: string;
  media: DownloadAppMedia;
  secondaryText?: string;
  ukGooglePlayUrl?: string;
  ukAppStoreUrl?: string;
}

/** Props specific to QRAndMedia */
interface QRAndMediaDownloadAppProps extends BaseDownloadAppProps {
  variant: "QRAndMedia";
  media: DownloadAppMedia;
  /** QR code image shown for the App Store button */
  appStoreQRCode: string;
  /** QR code image shown for the Google Play button */
  googlePlayQRCode: string;
  /** Optional short sub-label shown below the heading */
  subheading?: string;
}

export type DownloadAppProps = StandardDownloadAppProps | QRAndMediaDownloadAppProps;

/* ─────────────────────────────────────────────────────────────────────────────
 * Shared Sub-Components
 * ───────────────────────────────────────────────────────────────────────────── */

/** Compact store buttons used in ImageRight / ImageLeft / default */
function StoreButtons({
  googlePlayUrl,
  appStoreUrl,
}: {
  googlePlayUrl: string;
  appStoreUrl: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-4 mt-8">
      <Link
        href={googlePlayUrl}
        className="bg-transparent hover:bg-white/5 border border-white/10 transition-all duration-300 px-6 py-2.5 rounded-xl flex items-center gap-3 group/btn active:scale-95 shadow-sm"
      >
        <LucideIcons.Gamepad2 className="w-6 h-6 text-white group-hover/btn:scale-110 transition-transform" />
        <div className="flex flex-col leading-none">
          <span className="text-[9px] opacity-60 font-bold uppercase tracking-[0.1em] text-white">Get it on</span>
          <span className="text-lg font-bold text-white">Google Play</span>
        </div>
      </Link>

      <Link
        href={appStoreUrl}
        className="bg-transparent hover:bg-white/5 border border-white/10 transition-all duration-300 px-6 py-2.5 rounded-xl flex items-center gap-3 group/btn active:scale-95 shadow-sm"
      >
        <LucideIcons.Apple className="w-6 h-6 text-white group-hover/btn:scale-110 transition-transform" />
        <div className="flex flex-col leading-none">
          <span className="text-[9px] opacity-60 font-bold uppercase tracking-[0.1em] text-white">Download on the</span>
          <span className="text-lg font-bold text-white">App Store</span>
        </div>
      </Link>
    </div>
  );
}

/** High-fidelity phone frame with media inside */
function PhoneFrame({ media, heading }: { media: DownloadAppMedia; heading: string }) {
  return (
    <div className="relative w-full max-w-[340px] aspect-[9/18.5] mx-auto p-4 flex items-center justify-center">
      {/* High-Fidelity Phone Frame SVG */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <svg viewBox="0 0 370 760" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect x="5.5" y="5.5" width="359" height="749" rx="54.5" stroke="white" strokeOpacity="0.1" strokeWidth="11" />
          <rect x="15" y="15" width="340" height="730" rx="45" fill="#0C0C0C" />
          <rect x="135" y="32" width="100" height="28" rx="14" fill="#1A1A1A" />
        </svg>
      </div>

      <div className="relative z-10 w-[92%] h-[95%] rounded-[40px] overflow-hidden bg-black/40">
        {media.type === "video" ? (
          <video
            src={media.src}
            poster={media.poster}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={media.src}
            alt={heading}
            fill
            className="object-cover"
          />
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Main Component
 * ───────────────────────────────────────────────────────────────────────────── */

export default function DownloadApp(props: DownloadAppProps) {
  const { variant = "default", heading, googlePlayUrl, appStoreUrl, className } = props;

  /* ── QRAndMedia variant ── */
  if (variant === "QRAndMedia") {
    const { media, appStoreQRCode, googlePlayQRCode, subheading } = props as QRAndMediaDownloadAppProps;

    return (
      <div
        className={cn(
          "w-full flex flex-col lg:flex-row rounded-[32px] overflow-hidden bg-[#16181A] border border-[#8C929D]/40 shadow-2xl",
          className
        )}
      >
        {/* ── Left: Full-bleed Media ── */}
        <div className="relative w-full lg:w-1/2 aspect-video lg:aspect-auto min-h-[220px] overflow-hidden flex-shrink-0">
          {media.type === "video" ? (
            <video
              src={media.src}
              poster={media.poster}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <Image
              src={media.src}
              alt={heading}
              fill
              className="object-cover"
            />
          )}
          {/* subtle gradient overlay on right edge so content feels connected */}
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-[#16181A] hidden lg:block pointer-events-none" />
        </div>

        {/* ── Right: Heading + QR codes + Buttons ── */}
        <div className="flex flex-col justify-center gap-8 p-8 lg:p-12 xl:p-16 flex-1">
          {/* Heading block */}
          <div className="flex flex-col gap-3">
            {subheading && (
              <span className="font-aileron font-semibold text-sm uppercase tracking-[0.18em] text-white/40">
                {subheading}
              </span>
            )}
            <h2 className="font-aileron font-semibold text-2xl lg:text-3xl xl:text-4xl leading-[1.15] text-white tracking-tight">
              {heading}
            </h2>
          </div>

          {/* QR Code pair */}
          <div className="flex flex-wrap items-start gap-6">
            {/* App Store QR */}
            <div className="flex flex-col items-center gap-2.5">
              <div className="w-[88px] h-[88px] relative rounded-xl overflow-hidden bg-white p-1.5 shadow-lg">
                <Image
                  src={appStoreQRCode}
                  alt="Scan to download on App Store"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="font-geist text-[11px] font-medium text-white/50 text-center leading-tight">
                App Store
              </span>
            </div>

            {/* Google Play QR */}
            <div className="flex flex-col items-center gap-2.5">
              <div className="w-[88px] h-[88px] relative rounded-xl overflow-hidden bg-white p-1.5 shadow-lg">
                <Image
                  src={googlePlayQRCode}
                  alt="Scan to download on Google Play"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="font-geist text-[11px] font-medium text-white/50 text-center leading-tight">
                Google Play
              </span>
            </div>
          </div>

          {/* Divider with label */}
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="font-geist text-xs text-white/30 uppercase tracking-widest">or download directly</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Store Buttons */}
          <div className="flex flex-wrap items-center gap-3 -mt-2">
            <Link
              href={appStoreUrl}
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition-all duration-200 group/btn active:scale-95"
            >
              <LucideIcons.Apple className="w-6 h-6 text-white shrink-0 group-hover/btn:scale-110 transition-transform" />
              <div className="flex flex-col leading-none">
                <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-white/50">Download on the</span>
                <span className="text-base font-bold text-white">App Store</span>
              </div>
            </Link>

            <Link
              href={googlePlayUrl}
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition-all duration-200 group/btn active:scale-95"
            >
              <LucideIcons.Gamepad2 className="w-6 h-6 text-white shrink-0 group-hover/btn:scale-110 transition-transform" />
              <div className="flex flex-col leading-none">
                <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-white/50">Get it on</span>
                <span className="text-base font-bold text-white">Google Play</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  /* ── ImageRight / ImageLeft variants ── */
  if (variant === "ImageRight" || variant === "ImageLeft") {
    const { body, media } = props as StandardDownloadAppProps;

    return (
      <div
        className={cn(
          "w-full flex flex-col items-center gap-12 lg:gap-24 px-6 md:px-12 py-20 lg:py-32",
          className
        )}
      >
        <div
          className={cn(
            "flex flex-col items-center lg:flex-row gap-16 lg:gap-32 w-full max-w-7xl mx-auto",
            variant === "ImageLeft" ? "lg:flex-row-reverse" : ""
          )}
        >
          {/* Content Section */}
          <div className="flex-[1.2] flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
            <h2 className="font-aileron font-semibold text-4xl lg:text-5xl leading-[1.1] text-white tracking-tight">
              {heading}
            </h2>
            <div className="font-geist text-lg lg:text-xl text-white/70 leading-relaxed max-w-[640px] space-y-6">
              {body.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Media Section: Phone Frame */}
          <div className="flex-1 w-full max-w-md">
            <PhoneFrame media={media} heading={heading} />
          </div>
        </div>

        {/* Global Store Buttons at the Bottom */}
        <div className="w-full flex justify-center lg:justify-start lg:max-w-7xl mx-auto lg:px-20">
          <StoreButtons googlePlayUrl={googlePlayUrl} appStoreUrl={appStoreUrl} />
        </div>
      </div>
    );
  }

  /* ── Default variant ── */
  const { body, media, ukGooglePlayUrl, ukAppStoreUrl } = props as StandardDownloadAppProps;

  return (
    <div
      className={cn(
        "w-full grid grid-cols-1 lg:grid-cols-2 rounded-[40px] overflow-hidden bg-[#16181A] border border-[#8C929D] shadow-2xl relative group",
        className
      )}
    >
      <div className="p-8 lg:p-12 flex items-center justify-center border-b border-[#8C929D]/20 lg:border-b-0 lg:border-r">
        <PhoneFrame media={media} heading={heading} />
      </div>
      <div className="p-8 lg:p-16 flex flex-col justify-center gap-10">
        <div className="flex flex-col gap-5">
          <h2 className="font-aileron font-semibold text-4xl lg:text-5xl text-white tracking-tight">{heading}</h2>
          <p className="font-geist text-lg text-white/60 leading-relaxed max-w-xl">{body}</p>
        </div>
        <StoreButtons googlePlayUrl={googlePlayUrl} appStoreUrl={appStoreUrl} />
        {(ukGooglePlayUrl || ukAppStoreUrl) && (
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/5">
            <span className="text-white/30 text-xs font-bold uppercase tracking-widest">UK Version</span>
            {ukGooglePlayUrl && (
              <Link href={ukGooglePlayUrl} className="text-white/60 hover:text-white text-sm font-bold">
                Google Play
              </Link>
            )}
            {ukAppStoreUrl && (
              <Link href={ukAppStoreUrl} className="text-white/60 hover:text-white text-sm font-bold">
                App Store
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
