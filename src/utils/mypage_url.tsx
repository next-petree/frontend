export const MemberInfoUrl = (changePw:boolean) => {
    return `me/member-info${changePw ? "/pwd/change" : ""}`;
}

export const DuplicateCheckUrl = (nickname:string) => {
    return `nickname/check?nickname=${nickname}`;
}