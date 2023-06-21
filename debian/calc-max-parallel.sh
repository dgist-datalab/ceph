#!/bin/sh
#
# Simple tool to calculate max parallel jobs based on
# memory of builder.
#
# MDCache.cc generally runs out of RAM in 4G of memory
# with parallel=4

total_ram=$(grep MemTotal /proc/meminfo | awk '{ print $2 }')

sixteen_g=$((16*1024*1024))
eight_g=$((8*1024*1024))
four_g=$((4*1024*1024))

if [ ${total_ram} -le ${four_g} ]; then
    if dpkg-architecture -q DEB_BUILD_ARCH | grep -q -e arm -e mips -e powerpc -e ppc; then
        echo "--max-parallel=1"
    else
        echo "--max-parallel=2"
    fi
elif [ ${total_ram} -le ${eight_g} ]; then
    echo "--max-parallel=2"
elif [ ${total_ram} -le ${sixteen_g} ]; then
    echo "--max-parallel=3"
else
    echo "--max-parallel=4"
fi
