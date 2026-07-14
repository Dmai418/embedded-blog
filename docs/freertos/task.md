---
sidebar_position: 2
---

# FreeRTOS 任务管理

## 任务状态

- 运行态 (Running)
- 就绪态 (Ready)
- 阻塞态 (Blocked)
- 挂起态 (Suspended)

## 多任务示例

```c
void Task1(void *arg) {  // LED 闪烁
    while(1) { HAL_GPIO_TogglePin(LED1_GPIO, LED1_Pin); osDelay(500); }
}

void Task2(void *arg) {  // 串口打印
    while(1) { printf("Task2 running\n"); osDelay(1000); }
}

void Task3(void *arg) {  // 读取传感器
    while(1) { value = ReadSensor(); osDelay(100); }
}
```

## 优先级

FreeRTOS 支持抢占式调度：高优先级任务会打断低优先级任务。
