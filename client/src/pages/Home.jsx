import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import WhyEnjinn from '../components/sections/WhyEnjinn';
import CoreCapabilities from '../components/sections/CoreCapabilities';
import ArchitectureClassDiagram from '../components/sections/ArchitectureClassDiagram';
import TechStack from '../components/sections/TechStack';
import GetStarted from '../components/sections/GetStarted';
import StickySteps from '../components/sections/StickySteps';
import DitherCTA from '../components/sections/DitherCTA';

export default function Home() {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ position: 'relative' }}
    >
      <Hero />
      <WhyEnjinn />
      <CoreCapabilities />
      <ArchitectureClassDiagram />
      <TechStack />
      <GetStarted />
      <StickySteps />
      <DitherCTA />
    </motion.div>
  );
}
