export interface User {
    id: number;
    login: string;
    name: string;
    html_url: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
}