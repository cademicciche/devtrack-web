import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });


import { title, subtitle } from "@/components/primitives";
import splashAnimation from '@/lotties/splash_animation.json';

export default function IndexPage() {
  return (
      <section className="flex flex-col items-center justify-center gap-1 py-8 md:py-10">
        <Lottie
            loop={true}
            autoPlay={true}
            animationData={splashAnimation}
        />
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Seamlessly track, manage, and optimize your project time.</span>
          <br />
          <span className={title({ color: "yellow" })}>One timer at a time.</span>
          <br />
          <div className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
          >
            Sign Up
          </Link>
          <Link
            isExternal
            className={buttonStyles({
              color: "secondary",
              radius: "full",
              variant: "shadow",
            })}
          >
            Login
          </Link>
        </div>
      </section>
  );
}
