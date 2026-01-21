---
title: "给家中的废旧电脑装Ubuntu"
tags:
    - user manual
    - Ubuntu
    - Home
date: "2026-1-20"
thumbnail: "/assets/img/thumbnail/CR400BF-GS-5314.png"
bookmark: true
---
# 给家中的废旧电脑装Ubuntu
## 基础配置
基础配置如下图：

其中500G那块机械硬盘已基本报废（Diskinfo告警）。

## 装机
任务：
- [ ] 装Ubuntu22.04
- [ ] 挂载两块机械硬盘
- [ ] 换源
- [ ] 配置中文输入法、ssh
- [ ] 安装wps、rustdesk、同花顺、微信

## 挂载硬盘

```bash
wang@wang-ubuntu:~$ sudo fdisk -l
Disk /dev/loop0：74.27 MiB，77881344 字节，152112 个扇区
单元：扇区 / 1 * 512 = 512 字节
扇区大小(逻辑/物理)：512 字节 / 512 字节
I/O 大小(最小/最佳)：512 字节 / 512 字节


Disk /dev/loop1：505.09 MiB，529625088 字节，1034424 个扇区
单元：扇区 / 1 * 512 = 512 字节
扇区大小(逻辑/物理)：512 字节 / 512 字节
I/O 大小(最小/最佳)：512 字节 / 512 字节


Disk /dev/loop2：271.24 MiB，284413952 字节，555496 个扇区
单元：扇区 / 1 * 512 = 512 字节
扇区大小(逻辑/物理)：512 字节 / 512 字节
I/O 大小(最小/最佳)：512 字节 / 512 字节


Disk /dev/loop3：4 KiB，4096 字节，8 个扇区
单元：扇区 / 1 * 512 = 512 字节
扇区大小(逻辑/物理)：512 字节 / 512 字节
I/O 大小(最小/最佳)：512 字节 / 512 字节


Disk /dev/loop4：91.69 MiB，96141312 字节，187776 个扇区
单元：扇区 / 1 * 512 = 512 字节
扇区大小(逻辑/物理)：512 字节 / 512 字节
I/O 大小(最小/最佳)：512 字节 / 512 字节


Disk /dev/loop5：12.93 MiB，13553664 字节，26472 个扇区
单元：扇区 / 1 * 512 = 512 字节
扇区大小(逻辑/物理)：512 字节 / 512 字节
I/O 大小(最小/最佳)：512 字节 / 512 字节


Disk /dev/loop6：38.83 MiB，40714240 字节，79520 个扇区
单元：扇区 / 1 * 512 = 512 字节
扇区大小(逻辑/物理)：512 字节 / 512 字节
I/O 大小(最小/最佳)：512 字节 / 512 字节


Disk /dev/loop7：500 KiB，512000 字节，1000 个扇区
单元：扇区 / 1 * 512 = 512 字节
扇区大小(逻辑/物理)：512 字节 / 512 字节
I/O 大小(最小/最佳)：512 字节 / 512 字节


Disk /dev/sda：119.24 GiB，128035676160 字节，250069680 个扇区
Disk model: SATA SSD        
单元：扇区 / 1 * 512 = 512 字节
扇区大小(逻辑/物理)：512 字节 / 512 字节
I/O 大小(最小/最佳)：512 字节 / 512 字节
磁盘标签类型：dos
磁盘标识符：0xaabbccdd

设备       启动     起点      末尾      扇区   大小 Id 类型
/dev/sda1  *        2048    999423    997376   487M ef EFI (FAT-12/16/32)
/dev/sda2        1001470 250068991 249067522 118.8G  5 扩展
/dev/sda5        1001472  17000447  15998976   7.6G 82 Linux swap / Solaris
/dev/sda6       17002496 250068991 233066496 111.1G 83 Linux


Disk /dev/sdb：465.76 GiB，500107862016 字节，976773168 个扇区
Disk model: WDC WD5000AAKX-7
单元：扇区 / 1 * 512 = 512 字节
扇区大小(逻辑/物理)：512 字节 / 512 字节
I/O 大小(最小/最佳)：512 字节 / 512 字节
磁盘标签类型：dos
磁盘标识符：0x3fd859a6

设备       启动      起点      末尾      扇区   大小 Id 类型
/dev/sdb1  *           63 167782859 167782797    80G  7 HPFS/NTFS/exFAT
/dev/sdb2       167782860 976768064 808985205 385.8G  f W95 扩展 (LBA)
/dev/sdb5       167782923 335565719 167782797    80G  7 HPFS/NTFS/exFAT
/dev/sdb6       335565783 976768064 641202282 305.7G  7 HPFS/NTFS/exFAT


Disk /dev/sdc：931.51 GiB，1000204886016 字节，1953525168 个扇区
Disk model: WDC WD10EZEX-60W
单元：扇区 / 1 * 512 = 512 字节
扇区大小(逻辑/物理)：512 字节 / 4096 字节
I/O 大小(最小/最佳)：4096 字节 / 4096 字节
wang@wang-ubuntu:~$ lsblk
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
loop0    7:0    0  74.3M  1 loop /snap/core22/1612
loop1    7:1    0 505.1M  1 loop /snap/gnome-42-2204/176
loop2    7:2    0 271.2M  1 loop /snap/firefox/4848
loop3    7:3    0     4K  1 loop /snap/bare/5
loop4    7:4    0  91.7M  1 loop /snap/gtk-common-themes/1535
loop5    7:5    0  12.9M  1 loop /snap/snap-store/1113
loop6    7:6    0  38.8M  1 loop /snap/snapd/21759
loop7    7:7    0   500K  1 loop /snap/snapd-desktop-integration/178
sda      8:0    0 119.2G  0 disk 
├─sda1   8:1    0   487M  0 part /boot/efi
├─sda2   8:2    0     1K  0 part 
├─sda5   8:5    0   7.6G  0 part [SWAP]
└─sda6   8:6    0 111.1G  0 part /
sdb      8:16   0 465.8G  0 disk 
├─sdb1   8:17   0    80G  0 part 
├─sdb2   8:18   0     1K  0 part 
├─sdb5   8:21   0    80G  0 part 
└─sdb6   8:22   0 305.7G  0 part 
sdc      8:32   0 931.5G  0 disk
wang@wang-ubuntu:~$ sudo mkfs.ext4 /dev/sdc
wang@wang-ubuntu:~$ sudo mkdir /mnt/temp
wang@wang-ubuntu:~$ sudo mount /dev/sdc /mnt/temp
wang@wang-ubuntu:~$ sudo rsync -avxHAX --progress /home/ /mnt/temp/
sent 1,853,810,811 bytes  received 88,817 bytes  176,561,869.33 bytes/sec
total size is 1,852,893,267  speedup is 1.00
wang@wang-ubuntu:~$ sudo umount /home
umount: /home: not mounted.
wang@wang-ubuntu:~$ sudo mount /dev/sdc /home
wang@wang-ubuntu:~$ sudo blkid | grep sdc
/dev/sdc: UUID="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" BLOCK_SIZE="4096" TYPE="ext4"
wang@wang-ubuntu:~$ sudo nano /etc/fstab 
UUID=********-****-****-****-************ /home ext4 defaults 0 2
wang@wang-ubuntu:~$ sudo mount -a
wang@wang-ubuntu:~$ df -h | grep home
/dev/sdc        916G  1.8G  868G    1% /home
wang@wang-ubuntu:~$ df -h
文件系统        大小  已用  可用 已用% 挂载点
tmpfs           785M  1.9M  783M    1% /run
/dev/sda6       109G   16G   88G   16% /
tmpfs           3.9G     0  3.9G    0% /dev/shm
tmpfs           5.0M  4.0K  5.0M    1% /run/lock
efivarfs        128K   23K  101K   18% /sys/firmware/efi/efivars
/dev/sda1       487M  6.1M  480M    2% /boot/efi
tmpfs           785M  2.4M  782M    1% /run/user/1000
/dev/sdc        916G  1.8G  868G    1% /home
wang@wang-ubuntu:~/Downloads$ lsblk
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
loop0    7:0    0  74.3M  1 loop /snap/core22/1612
loop1    7:1    0 505.1M  1 loop /snap/gnome-42-2204/176
loop2    7:2    0 271.2M  1 loop /snap/firefox/4848
loop3    7:3    0     4K  1 loop /snap/bare/5
loop4    7:4    0  91.7M  1 loop /snap/gtk-common-themes/1535
loop5    7:5    0  12.9M  1 loop /snap/snap-store/1113
loop6    7:6    0  38.8M  1 loop /snap/snapd/21759
loop7    7:7    0   500K  1 loop /snap/snapd-desktop-integration/178
sda      8:0    0 119.2G  0 disk 
├─sda1   8:1    0   487M  0 part /boot/efi
├─sda2   8:2    0     1K  0 part 
├─sda5   8:5    0   7.6G  0 part [SWAP]
└─sda6   8:6    0 111.1G  0 part /
sdb      8:16   0 465.8G  0 disk 
├─sdb1   8:17   0    80G  0 part 
├─sdb2   8:18   0     1K  0 part 
├─sdb5   8:21   0    80G  0 part 
└─sdb6   8:22   0 305.7G  0 part 
sdc      8:32   0 931.5G  0 disk /home
                                 /mnt/temp
```

