---
title: "Allocators"
desc: "Different types of allocators and their concepts"
tags: ["operating systems", "memory", "allocators"]
---

# Allocators
## Bump (stack) allocator
A bump allocator is a simple linear memory allocator that tracks the number of allocations and allocated bytes

### Concept
Bump allocators sequentially allocate memory; Initially tracking the start address and bumping it by allocation size, effectively defining the boundary between used and unused memory. Allocations are contiguous and therefore deallocations aren't tracked but instead freed by the entire heap

#### Pros
- Simple and fast allocations
- Predictable memory layout
- No bookkeeping

#### Cons
- Deallocated memory can only be utilized after ALL allocations are freed

## Linked List (pool) allocator
A linked list allocator is a dynamic, linear memory allocation strategy that utilizes a linked list data structure. Unlike a bump allocator, which allocates memory sequentially, a linked list allocator divides memory into blocks of varying size and uses a linked list to keep track of available memory blocks

### Concept
Initially the entire heap is represented as one whole block. As allocations are made, the heap is divided into non-contiguous blocks. Within each free block is the size of the memory block and a pointer to the next unallocated memory block. To track all free blocks, only a pointer to the initial (head) free block is required

#### Pros
- Handles flexible, frequent allocation and deallocations
- Enables memory resuse without all allocations freed

#### Cons
- Susceptible to fragmentation; Where memory can be permanently divided into smaller blocks
- Bookkeping

## Fixed(-size) block allocator
A fixed-size block allocator is similar to a linked list allocator but with the main difference being that it stores a new linked list for each block size. Blocks of varying sizes are made to meet allocation request and since each block size defines a new list (head), the head name itself defines the block size, e.g. head_16

### Concept
Like a linked list allocator, the heap is initially an entire block. Instead of using a single list, a list is created for each block size, where the lists can only store blocks of their specified size. When allocating, memory request are rounded up to the nearest block size

#### Pros
- Handles flexible, frequent allocation and deallocations
- Enables memory resuse without all allocations freed
- Fast, no traversal on allocations or deallocations

#### Cons
- Memory waste by roundup
- Susceptible to fragmentation