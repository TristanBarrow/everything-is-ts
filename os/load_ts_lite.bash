bun index.ts ./os/boot_sect.ts ./os/bin/boot_sect.asm
nasm ./os/bin/boot_sect.asm -o ./os/bin/boot_sect.bin
qemu-system-x86_64 -nographic -drive format=raw,file=./os/bin/boot_sect.bin