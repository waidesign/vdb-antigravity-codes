import Image from "next/image";
import Link from "next/link";
import { Layers3, FileKey, RefreshCcw } from "lucide-react";

export function AccessSection() {
    return (
        <section className="w-full" style={{ padding: "80px 0", background: "#000000" }}>
            <div className="section-content px-10 lg:px-20 flex flex-col gap-20">
                {/* Header + Description */}
                <div className="flex flex-col gap-2 items-start text-left">
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-aileron font-semibold" style={{ fontSize: 40, lineHeight: "1.2em", color: "#A9ADB5" }}>
                            Simplifying API Access{" "}
                        </span>
                        <span className="font-aileron font-semibold text-white" style={{ fontSize: 40, lineHeight: "1.2em" }}>
                            for Everyone
                        </span>
                    </div>
                    <p className="font-geist" style={{ fontSize: 16, lineHeight: "1.5em", color: "#A9ADB5" }}>
                        Our intuitive API platform makes accessing automotive data effortless for both tech-savvy users and those
                        less familiar with technology. Whether you&apos;re a developer or a business owner, our portal is designed by
                        keeping you in mind ensuring you get the automotive data you need without the hassle.
                        <br /><br />
                        Track your metrics, manage keys, and monitor usage—all designed to eliminate the complexity of data
                        integration so you can focus on leveraging valuable insights to drive your business forward.
                    </p>
                </div>

                {/* Features Row */}
                <div className="flex items-start gap-20">
                    {/* Feature 1 */}
                    <div className="flex flex-col gap-4 flex-1">
                        <Layers3 size={32} className="text-white" />
                        <h4 className="font-aileron font-semibold text-white" style={{ fontSize: 32, lineHeight: "1.25em" }}>
                            API Testing Platform for Everyone
                        </h4>
                        <p className="font-geist" style={{ fontSize: 16, lineHeight: "1.5em", color: "#A9ADB5" }}>
                            Easily test APIs, receive JSON responses, and visualize them in a user-friendly interface. Our platform
                            caters to both developers and non-technical users.
                        </p>
                    </div>
                    {/* Feature 2 */}
                    <div className="flex flex-col gap-4 flex-1">
                        <FileKey size={32} className="text-white" />
                        <h4 className="font-aileron font-semibold text-white" style={{ fontSize: 32, lineHeight: "1.25em" }}>
                            Manage Keys and Monitor Usage
                        </h4>
                        <p className="font-geist" style={{ fontSize: 16, lineHeight: "1.5em", color: "#A9ADB5" }}>
                            Track usage with a comprehensive dashboard. Analyze detailed metrics, including API usage statistics and
                            performance indicators, all in one place.
                        </p>
                    </div>
                    {/* Feature 3 */}
                    <div className="flex flex-col gap-4 flex-1">
                        <RefreshCcw size={32} className="text-white" />
                        <h4 className="font-aileron font-semibold text-white" style={{ fontSize: 32, lineHeight: "1.25em" }}>
                            Seamless Subscription Management
                        </h4>
                        <p className="font-geist" style={{ fontSize: 16, lineHeight: "1.5em", color: "#A9ADB5" }}>
                            Easily manage your active plans and subscriptions through our intuitive interface. Upgrade, downgrade, or
                            modify your plan with just a few clicks.
                        </p>
                    </div>
                </div>

                {/* Dashboard Graphic */}
                <div className="w-full">
                    <Image
                        src="/images/access-graphic.svg"
                        alt="API Dashboard"
                        width={1280}
                        height={622}
                        className="w-full h-auto"
                    />
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center justify-center gap-4">
                    <Link
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-aileron font-semibold text-base text-white transition-opacity hover:opacity-80"
                        style={{ background: "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)" }}
                    >
                        Start for FREE
                        <Image src="/images/arrow-white.svg" alt="" width={5} height={9} />
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-aileron font-semibold text-base text-white border border-white transition-opacity hover:opacity-80"
                    >
                        Schedule a Demo
                        <Image src="/images/calendar-icon.svg" alt="" width={13} height={13} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
