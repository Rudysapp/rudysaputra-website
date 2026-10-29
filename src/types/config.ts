import type {
    SYSTEM_MODE,
    DARK_MODE,
    LIGHT_MODE,
} from "@constants/style";
import type {
    WALLPAPER_FULLSCREEN,
    WALLPAPER_BANNER,
    WALLPAPER_NONE,
} from "@constants/layout";
import type { SupportedLanguage } from "@i18n/language";


/**
 * 
 */

// Pengaturan analytics
export type AnalyticsConfig = {
    enabled: boolean;
    platform: "umami";
    umami: {
        apiKey: string;
        baseUrl: string;
        code: string;
    };
};

/**
 * 
 */

// Pengaturan favicon
export type Favicon = {
    src: string;
    theme?: "light" | "dark";
    sizes?: string;
};


// Pengaturan layar loading
export type LoadingOverlayConfig = {
    // Aktifkan layar loading atau tidak
    enable: boolean;
    // Tunggu font selesai dimuat sebelum layar loading ditutup
    waitForFonts: boolean;
    // Tunggu gambar pertama selesai diproses sebelum layar loading ditutup
    waitForImages: boolean;
    // Batas waktu loading maksimal (detik)
    maxWait: number;
    // Pengaturan judul loading
    title: {
        // Tampilkan judul loading atau tidak
        enable: boolean;
        // Teks judul loading
        content: string;
        // Durasi animasi (detik)
        interval: number;
    };
    // Pengaturan animasi loading
    spinner: {
        // Aktifkan animasi loading atau tidak
        enable: boolean;
        // Durasi animasi (detik)
        interval: number;
    };
};


// Pengaturan website
export type SiteConfig = {
    // URL website (diakhiri garis miring /) 
    siteURL: string;
    // Judul website
    title: string;
    // Subjudul website
    subtitle: string;
    // Kata kunci website untuk membuat <meta name="keywords">
    keywords?: string[];
    // Pengaturan bahasa
    lang: SupportedLanguage;
    // Pengaturan terjemahan
    translate?: {
        // Aktifkan fitur terjemahan
        enable: boolean;
        // Jenis layanan terjemahan, misalnya 'client.edge'
        service?: string;
        // Tampilkan dropdown pilihan bahasa
        showSelectTag?: boolean;
        // Deteksi bahasa pengguna secara otomatis
        autoDiscriminate?: boolean;
        // Class CSS yang dilewati saat menerjemahkan
        ignoreClasses?: string[];
        // Tag HTML yang dilewati saat menerjemahkan
        ignoreTags?: string[];
    };
    // Pengaturan zona waktu
    timeZone: -12 | -11 | -10 | -9 | -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    // Pengaturan font
    font: {
        [key: string]: {
            // Font Source (Font CSS Link | Font File Path)
            src: string;
            // Font Name (font-family)
            family: string;
        };
    };
    // Pengaturan warna tema
    themeColor: {
        // Hue default warna tema (0–360)
        hue: number;
    };
    // Tema default
    defaultTheme: "system" | "light" | "dark";
    // Pengaturan wallpaper
    wallpaper: {
        // Mode
        mode: "fullscreen" | "banner" | "none";
        src: // Sumber gambar (dipakai mode fullscreen dan banner) 
        | string
        | string[]
        | {
            desktop?: string | string[];
            mobile?: string | string[];
        };
        // Posisi wallpaper, sama seperti object-position
        position?: "top" | "center" | "bottom";
        // Pengaturan slideshow (untuk mode fullscreen dan banner)
        carousel?: {
            // Aktifkan slideshow untuk beberapa gambar; kalau tidak, tampilkan satu gambar secara acak
            enable: boolean;
            // Jeda antar gambar (detik) 
            interval: number;
            // Aktifkan efek Ken Burns
            kenBurns?: boolean;
        };
        // Pengaturan khusus mode banner
        banner?: {
            homeText?: {
                // Tampilkan teks di halaman utama
                enable: boolean;
                // Judul utama
                title?: string;
                // Subjudul
                subtitle?: string | string[]; // Bisa berupa satu teks atau daftar teks
                // Efek mengetik pada subjudul
                typewriter?: {
                    // Aktifkan efek mengetik pada subjudul
                    enable: boolean;
                    // Kecepatan mengetik (ms)
                    speed: number;
                    // Kecepatan menghapus teks (ms)
                    deleteSpeed: number;
                    // Jeda setelah teks tampil penuh (ms)
                    pauseTime: number;
                };
            };
            // Keterangan sumber gambar banner
            credit?: {
                // Tampilkan keterangan sumber gambar banner
                enable: boolean;
                // Teks sumber yang ditampilkan
                text: string;
                // Opsional: URL karya asli atau halaman kreatornya
                url?: string;
            };
            // Pengaturan navbar
            navbar?: {
                // Mode transparansi navbar
                transparentMode?: "semi" | "full" | "semifull";
            };
            // Pengaturan efek gelombang air
            waves?: {
                // Aktifkan efek gelombang air
                enable: boolean;
                // Aktifkan mode ringan (efek gelombang disederhanakan agar lebih lancar)
                performanceMode?: boolean;
            };
        };
        // Pengaturan khusus mode fullscreen
        fullscreen?: {
            // Urutan lapisan
            zIndex?: number;
            // Tingkat transparansi wallpaper (0–1)
            opacity?: number;
            // Tingkat blur latar belakang (px)
            blur?: number;
            // Mode transparansi navbar
            navbar?: {
                transparentMode?: "semi" | "full" | "semifull";
            };
        };
    };
    // Pengaturan layar loading
    loadingOverlay?: LoadingOverlayConfig;
    // Pengaturan favicon
    favicon: Favicon[];
    // Pengaturan Bangumi
    bangumi?: {
        // ID pengguna
        userId?: string;
    };
    // Pengaturan OpenGraph
    generateOgImages: boolean;
};

/**
 * 
 */

export type LIGHT_DARK_MODE =
    | typeof LIGHT_MODE
    | typeof DARK_MODE
    | typeof SYSTEM_MODE;


export type WALLPAPER_MODE =
    | typeof WALLPAPER_FULLSCREEN
    | typeof WALLPAPER_BANNER
    | typeof WALLPAPER_NONE;

/**
 * 
 */

export enum LinkPreset {
    Home = 0,
    Archive = 1,
    Projects = 2,
    Skills = 3,
    Timeline = 4,
    Diary = 5,
    Albums = 6,
    Anime = 7,
    About = 8,
    Friends = 9,
}


export type NavbarLink = {
    // Nama tautan
    name: string;
    // URL tautan
    url: string;
    // Apakah merupakan tautan eksternal
    external?: boolean;
    // Ikon tautan
    icon?: string;
    // Deskripsi halaman transit/perantara
    description?: string;
    // Sub-tautan, dapat berupa NavbarLink atau LinkPreset
    children?: (NavbarLink | LinkPreset)[];
};


// Pengaturan navbar
export type NavbarConfig = {
    // Pengaturan tautan
    links: (NavbarLink | LinkPreset)[]; // Mendukung menu bertingkat
};

/**
 * 
 */

export type WidgetComponentType =
    | "profile"
    | "announcement"
    | "directory"
    | "categories"
    | "tags"
    | "statistics"
    | "toc"
    | "custom";


export type WidgetComponentConfig = {
    // Jenis komponen
    type: WidgetComponentType;
    // Aktifkan komponen ini
    enable: boolean;
    // Posisi komponen
    position: "top" | "sticky"; // Area atas atau area sticky
    // Style inline khusus
    style?: string;
    // Pengaturan tampil atau tidaknya di halaman
    visibility?: {
        // Mode pencocokan: 'include' (sertakan), 'exclude' (kecualikan)
        mode: "include" | "exclude";
        // Daftar aturan path halaman (mendukung regex)
        paths: string[];
    };
    // Pengaturan responsif
    responsive?: {
        // Sembunyikan di perangkat tertentu
        hidden?: ("mobile" | "tablet" | "desktop")[];
        // Batas untuk menciutkan tampilan
        collapseThreshold?: number;
    };
    // Kedalaman daftar (khusus komponen toc dan categories)
    depth?: number;
};


// Pengaturan profil
export type ProfileConfig = {
    // Pengaturan foto profil
    avatar?: string;
    // Pengaturan informasi
    name: string;
    // Pengaturan bio
    bio?: string;
    // Pengaturan tautan
    links: {
        name: string;
        url: string;
        icon: string;
    }[];
};


// Pengaturan pengumuman
export type AnnouncementConfig = {
    // Judul pengumuman
    title?: string;
    // Isi pengumuman
    content: string;
    // Jenis pengumuman
    type?: "info" | "warning" | "success" | "error";
    // Ikon pengumuman
    icon?: string;
    // Izinkan pengguna menutup pengumuman
    closable?: boolean;
    // Pengaturan tautan
    link?: {
        // Aktifkan tautan
        enable: boolean;
        // Teks tautan
        text: string;
        // URL tautan
        url: string;
        // Apakah tautan eksternal
        external?: boolean;
    };
};


// Pengaturan sidebar
export type SidebarConfig = {
    // Daftar komponen sidebar
    components: {
        left: WidgetComponentConfig[];
        right: WidgetComponentConfig[];
    };
};

/**
 * 
 */


// Penyedia layanan komentar
export type CommentProvider = "" |"";

// Pengaturan artikel
export type PostConfig = {
    // Pengaturan kartu artikel
    card: {
        // Pengaturan cover
        cover: {
            // Posisi cover ("left" atau "right")
            side: "left" | "right";
            // Lebar cover
            width: string;
            // Tampilkan teks di cover (judul, tag, ringkasan)
            showContent: boolean;
            // Tampilkan cover default jika belum ada cover
            showDefaultCover: boolean;
        };
        // Ukuran judul (class teks Tailwind, misalnya "text-3xl")
        titleSize: string;
    };
    // Tampilkan kartu "terakhir diedit"
    showLastModified: boolean;
    // Pengaturan highlight kode
    expressiveCode: {
        // Tema
        theme: string;
    };
    // Pengaturan lisensi
    license: {
        // Aktifkan lisensi
        enable: boolean;
        // Nama lisensi
        name: string;
        // Tautan lisensi
        url: string;
    };
    // Pengaturan komentar
    comment?: undefined; // tidak ada provider komentar
    
};

/**
 * 
 */

// Pengaturan footer
export type FooterConfig = {
    // Aktifkan penyisipan HTML di footer
    enable: boolean;
    // HTML khusus untuk menambahkan nomor registrasi dan info lainnya
    customHtml?: string;
};

/**
 * 
 */

// Pengaturan efek partikel
export type ParticleConfig = {
    // Aktifkan efek partikel
    enable: boolean;
    // Jumlah partikel
    particleNum: number;
    // Batas partikel keluar area; -1 berarti berulang tanpa batas
    limitTimes: number;
    // Pengaturan ukuran partikel
    size: {
        // Pengali ukuran partikel minimum
        min: number;
        // Pengali ukuran partikel maksimum
        max: number;
    };
    // Pengaturan transparansi partikel
    opacity: {
        // Opasitas minimum partikel
        min: number;
        // Opasitas maksimum partikel
        max: number;
    };
    // Pengaturan kecepatan gerak partikel
    speed: {
        // Kecepatan gerak horizontal
        horizontal: {
            // Nilai minimum
            min: number;
            // Nilai maksimum
            max: number;
        };
        // Kecepatan gerak vertikal
        vertical: {
            // Nilai minimum
            min: number;
            // Nilai maksimum
            max: number;
        };
        // Kecepatan rotasi
        rotation: number;
        // Kecepatan memudar
        fadeSpeed: number;
    };
    // Urutan lapisan partikel
    zIndex: number;
};

/**
 * 
 */

export type MusicPlayerTrack = {
    // Nomor urut
    id: number | string;
    // Judul
    title: string;
    // Pembuat
    artist: string;
    // Cover
    cover: string;
    // Path file
    url: string;
    // Lirik
    lrc?: string;
    // Durasi
    duration: number;
};


// Pengaturan pemutar musik
export type MusicPlayerConfig = {
    // Aktifkan pemutar musik
    enable: boolean;
    // Mode default
    mode: "meting" | "local";
    // Pengaturan khusus mode meting
    meting: {
        // Alamat API Meting
        meting_api: string;
        // Platform musik
        server: "netease" | "tencent" | "kugou" | "baidu" | "kuwo";
        // Jenis
        type: "playlist" | "album" | "artist" | "song" | "search";
        // ID sumber
        id: string;
    };
    // Pengaturan khusus mode local
    local: {
        // Playlist
        playlist: MusicPlayerTrack[];
    };
    // Putar otomatis atau tidak
    autoplay?: boolean;
};

/**
 * 
 */

// Pengaturan karakter asisten layar
export type PioConfig = {
    // Aktifkan karakter asisten layar
    enable: boolean;
    // Path file model
    models?: string[];
    // Posisi karakter asisten
    position?: "left" | "right";
    // Lebar karakter asisten
    width?: number;
    // Tinggi karakter asisten
    height?: number;
    // Mode tampilan
    mode?: "static" | "fixed" | "draggable";
    // Sembunyikan di perangkat mobile
    hiddenOnMobile?: boolean;
    // Pengaturan dialog
    dialog?: {
        // Ucapan selamat datang
        welcome?: string | string[];
        // Pesan saat disentuh
        touch?: string | string[];
        // Pesan di halaman utama
        home?: string;
        // Pesan saat mengganti tampilan
        skin?: [string, string]; // [sebelum diganti, setelah diganti]
        // Pesan saat ditutup
        close?: string;
        // Tautan halaman tentang
        link?: string;
        // Properti khusus
        custom?: Array<{
            // Selector CSS
            selector: string;
            // Jenis
            type: "read" | "link";
            // Teks khusus
            text?: string;
        }>;
    };
};