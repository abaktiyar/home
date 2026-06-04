import { motion } from 'framer-motion'
import { FaReact, FaPython, FaJava, FaAws, FaDocker, FaGitAlt } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiFlutter, SiScala, SiAmazondynamodb, SiPostgresql, SiSpring } from 'react-icons/si'

const skillGroups = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Python', icon: FaPython, color: '#3776AB' },
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
      { name: 'Scala', icon: SiScala, color: '#DC322F' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'Spring Boot', icon: SiSpring, color: '#6DB33F' },
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
    ],
  },
  {
    category: 'Tools & Infrastructure',
    items: [
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
      { name: 'Docker', icon: FaDocker, color: '#2496ED' },
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'DynamoDB', icon: SiAmazondynamodb, color: '#4053D6' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    ],
  },
]

const SkillBadge = ({ name, icon: Icon, color }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-200 cursor-default">
    <Icon size={18} style={{ color }} aria-hidden="true" />
    <span className="text-sm font-medium text-gray-700">{name}</span>
  </div>
)

const Skills = () => (
  <section id="skills" className="py-24 bg-gray-50">
    <div className="w-5/6 mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
      >
        <p className="text-4xl font-bold inline border-b-4 border-red-500">Skills</p>
      </motion.div>

      <div className="mt-12 flex flex-col gap-10">
        {skillGroups.map(({ category, items }, i) => (
          <motion.div
            key={category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <SkillBadge key={skill.name} {...skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
