---
sidebar_position: 2
---

# GPIO 详解

## 8种GPIO模式

| 模式 | 用途 |
|------|------|
| GPIO_MODE_INPUT | 输入（默认） |
| GPIO_MODE_OUTPUT_PP | 推挽输出 |
| GPIO_MODE_OUTPUT_OD | 开漏输出 |
| GPIO_MODE_AF_PP | 复用推挽 |
| GPIO_MODE_AF_OD | 复用开漏 |
| GPIO_MODE_ANALOG | 模拟输入 |
| GPIO_MODE_IT_RISING | 上升沿中断 |
| GPIO_MODE_IT_FALLING | 下降沿中断 |

## 按键输入

```c
// 配置 PA0 为输入
GPIO_InitStruct.Pin = GPIO_PIN_0;
GPIO_InitStruct.Mode = GPIO_MODE_INPUT;
GPIO_InitStruct.Pull = GPIO_PULLUP;
HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);

// 读取按键
if (HAL_GPIO_ReadPin(GPIOA, GPIO_PIN_0) == GPIO_PIN_RESET) {
    HAL_Delay(20);  // 消抖
    // 按键按下
}
```
