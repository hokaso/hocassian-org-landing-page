export const menuData = [
    {
        title: '五大矩陣',
        iconClass: 'fa-solid fa-circle',
        key: '1',
        children: [
            {title: '同和視頻矩陣', key: '1-1', href: 'https://video.hocassian.com'},
            {title: '同和素材矩陣', key: '1-2', href: 'https://material.hocassian.com'},
            {title: '同和創作矩陣', key: '1-3', href: 'https://create.hocassian.com'},
            {title: '同和造勢矩陣', key: '1-4', href: 'https://hocassian.cn'},
            {title: '同和分發矩陣', key: '1-5', href: 'https://www.wechatsync.com'},
        ],
    },
    {
        title: '开源共建',
        key: '2',
        iconClass: 'fa-solid fa-circle',
        children: [
            {
                title: '项目仓库',
                key: '2-1',
                children: [
                    {title: '同和新媒体矩阵', key: '2-1-1', href: 'https://github.com/hokaso/hocassian-media-matrix'},
                    {title: '可视化人脉图谱', key: '2-1-2', href: 'https://github.com/hokaso/hocassian-people-neo4j'},
                    {title: '矩阵官网', key: '2-1-3', href: 'https://github.com/hokaso/hocassian-org-landing-page'},
                    {title: '视频处理小工具', key: '2-1-4', href: 'https://github.com/hokaso/auto_clip/releases/tag/auto_cut-hks-2022.11.07'},
                ],
            },
            {
                title: '使用教程',
                key: '2-2',
                href: 'https://hocassian.gitbook.io/matrix'
            }
        ],
    },
    {
        title: '下载',
        iconClass: 'fa-solid fa-circle',
        key: '3',
        children: [
            {title: '同和智创工具箱', key: '3-1', href: '#software-download'},
            {title: 'AIGC生产流水线', key: '3-2', href: 'https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/技术赋能创作：如何通过AIGC搭建新媒体信息流生产流水线.pdf'},
            {title: '同和新媒体矩阵·详细介绍', key: '3-3', href: 'https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/同和新媒体矩阵·详细介绍.pdf'},
            {title: '同合杉天·公司简介', key: '3-4', href: 'https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/同合杉天·智能创作能力介绍手册.pdf'},
            {title: '同合杉天·商业计划书', key: '3-5', href: 'https://ops.hocassian.com:9000/prod-api/profile/video_matrix/landing_page/同合杉天·商业计划书.pdf'},
        ],
    },
];
