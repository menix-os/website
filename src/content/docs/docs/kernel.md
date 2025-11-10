---
title: Compiling the kernel
description: Learn how to set up a basic installation of Menix
---

:::note
This repository contains only the kernel and drivers.
If you want to get a bootable image, you might want to check out
[Bootstrap](/docs/bootstrap) instead.
:::

## Cloning the repository
Menix has external submodules as dependencies, to initialize them either run:

```sh
git clone https://github.com/menix-os/menix --recurse-submodules
```

or if you've already cloned the repository:

```sh
git submodule update --init --recursive
```

## Building the kernel

To build the kernel you will need:
- cargo
- rustc
- clang (Used for bindgen)
- lld

Make sure you have a full nightly toolchain installed,
including the `rust-src` component.

The following commmand will build the kernel and all drivers for x86_64:
```sh
cargo +nightly build --release --target toolchain/x86_64-kernel.json
```