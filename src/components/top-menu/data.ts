export const menuData = [
    {
        title: '五大矩陣',
        iconClass: 'fa-solid fa-circle',
        fontSize: 12,
        key: '1',
        children: [
            {title: '同和視頻矩陣', key: '1-1', href: 'https://video.hocassian.com', iconClass: 'fa-brands fa-tencent-weibo', fontSize: 30},
            {title: '同和素材矩陣', key: '1-2', href: 'https://material.hocassian.com', iconClass: 'fa-solid fa-film', fontSize: 30},
            {title: '同和創作矩陣', key: '1-3', href: 'https://create.hocassian.com', iconClass: 'fa-solid fa-pen', fontSize: 30},
            {title: '同和造勢矩陣', key: '1-4', href: 'https://hocassian.cn', iconClass: 'fa-solid fa-house-flood-water', fontSize: 30},
            {title: '同和分發矩陣', key: '1-5', href: 'https://www.wechatsync.com', iconClass: 'fa-solid fa-network-wired', fontSize: 30},
        ],
    },
    {
        title: '開源共建',
        key: '2',
        iconClass: 'fa-solid fa-circle',
        fontSize: 12,
        children: [
            {
                title: '項目倉庫',
                key: '2-1',
                iconClass: 'fa-brands fa-github',
                fontSize: 30,
                children: [
                    {title: '同和新媒體矩陣', key: '2-1-1', href: 'https://github.com/hokaso/hocassian-media-matrix', iconClass: 'fa-solid fa-snowflake', fontSize: 30},
                    {title: '可視化人脈圖譜', key: '2-1-2', href: 'https://github.com/hokaso/hocassian-people-neo4j', iconClass: 'fa-regular fa-user', fontSize: 30},
                    {title: '矩陣官網', key: '2-1-3', href: 'https://github.com/hokaso/hocassian-org-landing-page', iconClass: 'fa-regular fa-star', fontSize: 30},
                    {title: '視頻處理小工具', key: '2-1-4', href: 'https://github.com/hokaso/auto_clip/releases/tag/auto_cut-hks-2022.11.07', iconClass: 'fa-regular fa-file', fontSize: 30},
                ],
            },
            {
                title: '使用教程',
                key: '2-2',
                href: 'https://hocassian.gitbook.io/matrix',
                iconClass: 'fa-solid fa-book',
                fontSize: 30
            }
        ],
    },
    {
        title: '下載',
        iconClass: 'fa-solid fa-circle',
        fontSize: 12,
        key: '3',
        children: [
            {title: '同和智創工具箱', key: '3-1', href: 'software-download', iconClass: 'fa-solid fa-wrench', target: 'anchor', fontSize: 30},
            {title: 'AIGC生產流水綫', key: '3-2', href: 'https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/技术赋能创作：如何通过AIGC搭建新媒体信息流生产流水线.pdf', iconClass: 'fa-regular fa-paper-plane', fontSize: 30},
            {title: '同和新媒體矩陣·詳細介紹', key: '3-3', href: 'https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/同和新媒体矩阵·详细介绍.pdf', iconClass: 'fa-solid fa-circle-info', fontSize: 30},
            {title: '同合杉天·公司介紹', key: '3-4', href: 'https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/同合杉天·智能创作能力介绍手册.pdf', iconClass: 'fa-regular fa-building', fontSize: 30},
            {title: '同合杉天·商業計劃書', key: '3-5', href: 'https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/同合杉天·商业计划书.pdf', iconClass: 'fa-regular fa-bookmark', fontSize: 30},
        ],
    },
];
