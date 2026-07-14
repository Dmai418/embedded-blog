module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'C语言基础',
      collapsed: false,
      items: ['c-language/basics', 'c-language/pointer', 'c-language/structure'],
    },
    {
      type: 'category',
      label: 'STM32入门',
      collapsed: false,
      items: ['stm32/intro', 'stm32/gpio'],
    },
    {
      type: 'category',
      label: 'FreeRTOS',
      collapsed: false,
      items: ['freertos/intro', 'freertos/task'],
    },
    {
      type: 'category',
      label: '项目实战',
      collapsed: false,
      items: ['projects/projects', 'projects/led'],
    },
  ],
};
