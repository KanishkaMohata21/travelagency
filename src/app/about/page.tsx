"use client"
import {Awards} from '@/components/about/Awards';
import {Gallery} from '@/components/about/Gallery';
import { Hero } from '@/components/about/Hero';
import {Impact} from '@/components/about/Impact';
import {Mission} from '@/components/about/Mission';
import {Story} from '@/components/about/Story';
import {Team} from '@/components/about/Team';
import {Values} from '@/components/about/Values';
import { motion } from 'framer-motion';
const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero/>
      <Story />
      <Mission />
      <Values />
      <Team />
      <Gallery />
      <Impact />
      <Awards />
    </motion.div>
  )
}

export default AboutPage
