export const MemberInfoUrl = (changePw:boolean) => {
    return `me/member-info${changePw ? "/pwd/change" : ""}`;
}

export const DuplicateCheckUrl = (nickname:string) => {
    return `nickname/check?nickname=${nickname}`;
}

export const AvatarUrl = (method:string) => {
    return `me/profile/image${method === "post" ? "/upload":""}`;
}

export const IntroduceUrl = () => {
    return `me/profile/self-introduction`;
}

export const MajordogUrl = () => {
    return `breeder/main-breeds`;
}

export const LivingEnvironmentUrl = () => {
    return `adopter/residential-environments`;
}