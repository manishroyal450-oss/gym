import { TrainingProgram, BlogPost, StepItem, PricingPlan } from './types';

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: 'strength-builder',
    num: '(01)',
    title: 'Strength Builder',
    tags: 'Strength • Mobility • Endurance',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    level: 'Intermediate - Advanced',
    duration: '12 Weeks (4 days/week)',
    description: 'Designed for compound lift mastery, progressive overload, and hypertrophy. Build raw functional power and durable bone density.',
    highlights: ['Barbell & dumbbell compound cycles', 'Custom 1RM progression tracking', 'Targeted posterior chain mobility']
  },
  {
    id: 'total-fitness',
    num: '(02)',
    title: 'Total Fitness',
    tags: 'Recovery • Mobility • Flexibility',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
    level: 'All Levels',
    duration: '8 Weeks (3-5 days/week)',
    description: 'Harmonize dynamic resistance training with functional movement patterns. Optimize joint health, core stabilization, and daily vitality.',
    highlights: ['Full-body functional circuit training', 'Active joint flossing & dynamic stretching', 'Corrective posture reinforcement']
  },
  {
    id: 'fat-burn',
    num: '(03)',
    title: 'Fat Burn',
    tags: 'Cardio • Stamina • Conditioning',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop',
    level: 'Beginner - Intermediate',
    duration: '6 Weeks (4 days/week)',
    description: 'High-energy metabolic conditioning and intervals engineered to maximize caloric expenditure while preserving lean muscle mass.',
    highlights: ['Metabolic resistance training (MRT)', 'Heart-rate zone conditioning', 'Nutritional caloric deficit guidance']
  },
  {
    id: 'active-recovery',
    num: '(04)',
    title: 'Active Recovery',
    tags: 'Strength • Cardio • Mobility',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=800&auto=format&fit=crop',
    level: 'All Levels',
    duration: 'Ongoing (2-3 days/week)',
    description: 'Low-impact movement sessions that stimulate blood circulation, flush lactic buildup, and accelerate nervous system restoration between intense workouts.',
    highlights: ['Myofascial release & foam rolling techniques', 'Parasympathetic breathwork exercises', 'Light aerobic flush sessions']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'simple-workouts-boost-strength',
    tag: 'Training',
    date: 'Aug 23, 2026',
    readTime: '4 min read',
    title: 'Simple Workouts to Boost Your Strength',
    snippet: 'Learn easy exercises to increase strength, stay active, and improve your overall fitness daily.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
    fullContent: `Starting strength training doesn't require complex machines or hours of confusion. The foundation of true physical longevity lies in mastering five fundamental movement patterns: squatting, hinging, pushing, pulling, and carrying. 

By dedicating just 35-45 minutes three times a week to progressive resistance, you trigger myofibrillar hypertrophy and increase neuromuscular recruitment. Prioritize form over ego: steady 2.5kg to 5kg progression each month creates transformative long-term muscular adaptations without overloading joints.`
  },
  {
    id: 'recover-better-muscle-growth',
    tag: 'Insight',
    date: 'Aug 23, 2026',
    readTime: '5 min read',
    title: 'Recover Better To Support Muscle Growth',
    snippet: 'Support muscle growth with simple recovery habits that help your body repair, rebuild, and prepare for your next workout. Learn how sleep, nutrition, hydration, and rest can improve your overall training routine.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop',
    fullContent: `Muscles are stimulated in the gym, but they are synthesized during recovery. During high-intensity resistance training, microscopic tears occur in muscle fibers. The body repairs these fibers through protein synthesis, producing denser muscle tissue.

Key recovery pillars:
1. Deep Sleep: 7 to 9 hours of quality sleep releases crucial growth hormone (HGH).
2. Protein Timing: Aim for 1.6 - 2.2g of protein per kilogram of body weight distributed evenly throughout the day.
3. Electrolyte Hydration: Muscles require potassium, sodium, and magnesium to prevent cramping and maintain intracellular fluid balance.`
  },
  {
    id: 'fat-loss-journey-right-way',
    tag: 'Article',
    date: 'Aug 23, 2026',
    readTime: '6 min read',
    title: 'Start Your Fat Loss Journey The Right Way',
    snippet: 'Build sustainable fat loss habits with simple nutrition, exercise, and lifestyle strategies designed to help beginners make steady progress without extreme diets or complicated routines.',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop',
    fullContent: `Extreme restriction almost always triggers metabolic adaptation and rebound binge cycles. Sustainable body recomposition is built on consistent calorie management, strength training to safeguard muscle mass, and daily NEAT (Non-Exercise Activity Thermogenesis).

Aim for a moderate 300-500 calorie daily deficit. Keep your daily step count above 8,000 steps and lift weights at least three days per week to signal to your body to burn stored fat while holding on to hard-earned lean muscle.`
  }
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    id: 'step-1',
    num: '001',
    title: 'Set Your Goal',
    description: 'Choose your fitness goal and decide what you want to achieve — lose fat, build muscle, gain strength, or improve fitness.',
    detail: 'Complete our 2-minute lifestyle assessment. We evaluate your current training background, weekly availability, nutrition habits, and specific physical targets to establish realistic 30, 60, and 90-day checkpoints.'
  },
  {
    id: 'step-2',
    num: '002',
    title: 'Choose Your Plan',
    description: 'Select a training plan that matches your goal and fitness level, then follow each workout step by step.',
    detail: 'Receive a structured training calendar complete with HD movement demonstrations, warm-up sequences, rep/tempo guidelines, and progressive overload tracking tailored to your chosen gym setup.'
  },
  {
    id: 'step-3',
    num: '003',
    title: 'Track & Progress',
    description: 'Stay disciplined, monitor changes over time, and celebrate milestone improvements each week.',
    detail: 'Log workouts seamlessly, review weekly strength charts, and connect with assigned trainers for technique feedback, periodic plan adjustments, and continuous accountability.'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Plan',
    monthlyPrice: 800,
    badge: 'Essential',
    description: 'Perfect for beginners looking to establish consistency and learn proper lifting form.',
    features: [
      'Access to core training routines',
      'Video movement library & cues',
      'Weekly habit & workout logger',
      'Community forum access',
      'Cancel anytime'
    ]
  }
];
