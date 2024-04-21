---
title: "Microkernel Design"
desc: "All about microkernel design and concept"
tags: ["operating systems", "kernel"]
---

A microkernel is a modular and extensible kernel that leverages IPC, allowing process addresses to be isolated from each other and of course the kernel itself. It pushes most components into userland and focuses on keeping the kernel itself as minimal as functionally possible; Meanwhile emphasizing security and simplified testing

```
               +----------+
        +------| Hardware |
+-------|+     +----|-----+
|        |     +----|----+
| Kernel |--+--| Daemons |
|        |  |  +----|----+
+--------+ IPC +----|-----+
               | Software |
               +----------+
```

In microkernel architecture IPC, file systems and networking are implemented as daemons or services

### Pros
- Stabability: Reduced amount of code and kernel isolation
- Modularity: Seperates core kernel functionality from services
- Security: The modular design keeps services from affecting other system components and promotes seperate permissions
- Debugging: Fewer and isolated components allows easier testing
- Portability: Being minimalistic, it can run on more hardware

### Cons
- Performance: IPC overhead
- Complexity: The seperation of components and IPC makes things less simple

*Compared to a monolithic kernel*

## Interrupts
Both hardware and software interrputs cause the CPU to stop execution, save state, jump to a defined handler and resume execution after. The difference being that hardware interrupts are sent by some external device. When external events trigger an interrupt an interrupt service routine (ISR) is called

```
+------------+   +----------+
|            |<--| Hardware |
|            |   +----------+
| Interrupt  |
| Controller |      +-----+
|            |----->| CPU |
|            |      +-----+
+------------+
```

*x86 architecture systems are interrupt driven*

### CPU Exceptions
Exceptions are a type of interrupt sent by the CPU when an exception type occurs; Such as a double fault or illegal storage access

## Components
### Memory Management
Responsible for allocating, managing and ensuring processes have sufficent memory

### Process Management
Handles resources and the creation, termination and scheduling of processes. Manages the execution of user programs and fair use of system resources

### Inter-Process Communication (IPC)
Facilitates communication between processes running in user-space and kernel components. An IPC handles, remote procedure calls (RPC), message-passing, shared memory and more