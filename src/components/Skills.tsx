'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS', 'SQL'],
    },
    {
      title: 'Frontend',
      skills: [
        'React',
        'Next.js',
        'Tailwind CSS',
        'Redux',
        'Material-UI',
        'Framer Motion',
      ],
    },
    {
      title: 'Backend',
      skills: [
        'Node.js',
        'Express',
        'MongoDB',
        'PostgreSQL',
        'REST APIs',
        'GraphQL',
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        'Git',
        'Docker',
        'AWS',
        'Vercel',
        'Firebase',
        'VS Code',
      ],
    },
  ];

  return (
    <motion.section 
      className="py-12"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <motion.div className="space-y-8" variants={fadeInUp}>
        <div className="space-y-4">
          <motion.h2 
            className="text-2xl font-medium text-neutral-100"
            variants={fadeInUp}
          >
            Technical Skills
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="space-y-4"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-lg font-medium text-neutral-200">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 text-sm text-neutral-400 bg-neutral-900/50 rounded-full hover:bg-neutral-800/50 transition-colors"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: index * 0.1 + skillIndex * 0.05,
                      duration: 0.2
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skills; 