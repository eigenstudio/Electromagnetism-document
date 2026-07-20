import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "esd-vitepress-template",
  description: "A VitePress Site",
  markdown: {
    math: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Theory', link: '/theory/' },
      { text: 'Validation', link: '/validation/' },
      { text: 'Practice', link: '/practice/' }
    ],

    sidebar: [
      {
        text: 'Theory',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/theory/' },
          { text: '1. Introduction to Theory Manual', link: '/theory/01_Introduction_to_the_Theory_Manual' },
          { text: '2. Fundamentals of Electrostatics', link: '/theory/02_Fundamentals_to_Electrostatics' },
          { text: '3. Fundamentals of Magnetostatics', link: '/theory/03_Fundamentals_to_Magnetostatics' },
          { text: '4. Maxwell\'s Equations', link: '/theory/04_Maxwells_Equations_and_Electromagnetic_field_theory' },
          { text: '5. Magnetic Vector Potential Formulation', link: '/theory/05_Magnetic_Vector_Potential_Formulation' },
          { text: '6. Electrical Machine Fundamentals', link: '/theory/06_Electrical_machine_fundamental' },
          { text: '7. Motor Geometry and Components', link: '/theory/07_Motor_Geometry_and_Components' },
          { text: '8. Windings and Electrical Excitation', link: '/theory/08_Winding_And_Excitation' },
          { text: '9. Electromagnetic Materials', link: '/theory/09_Electromagnetic_Materials' },
          { text: '10. Finite Element Formulation', link: '/theory/10_Finite_Element_Formulation_for_Electromagnetic_Analysis' },
          { text: '11. Electromagnetic Governing Equations', link: '/theory/11_Electromagnetic_Governing_Equations' },
          { text: '12. Electromagnetic Simulation Setup', link: '/theory/12_Electromagnetic_Simulation_Setup' },
          { text: '13. Transient Simulation of Rotating Machines', link: '/theory/13_Transient_Simulation_of_Rotating_Electric_Machines' },
          { text: '14. Post-Processing and Evaluation', link: '/theory/14_Electromagnetic_Post_Processing_and_Performance_Evaluation' },
          { text: '15. Benchmark Validation & Verification', link: '/theory/15_Benchmark_Validation_and_Numerical_Verification' },
          { text: 'Mathematical Appendix', link: '/theory/Mathematical_Appendix' },
          { text: 'Symbols, Constants & References', link: '/theory/Symbols_Physical_Constants_and_References' }
        ]
      },
      {
        text: 'Validation',
        items: [
          { text: 'Validation Overview', link: '/validation/' }
        ]
      },
      {
        text: 'Practice',
        items: [
          { text: 'Practice Overview', link: '/practice/' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
