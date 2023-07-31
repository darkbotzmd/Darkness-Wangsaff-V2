{ pkgs }: {
    deps = [
        pkgs.nodejs-16_x
        pkgs.ffmpeg.bin
        pkgs.python39Packages.pip
        pkgs.qtile
        pkgs.unzip
        pkgs.cowsay
    ];
}