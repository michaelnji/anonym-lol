export interface Profile {
	name: string;
	email: string;
	created_at: string | Date;
	id: string;
	status: "banned" | "active" | "inactive" | "pro";
}
export interface Picture {
	url: string;
	created_at: string | Date;
	expires_at: string | Date;
}
export interface Message {
	meassage: string;
	owner_id: string;
	isPro: boolean;
	pictures?: Picture[];
	expires_at: string | Date;
}

export interface ClientResponse {
	message: string | null;
	error: string | null;
	data: Profile | Message | Message[] | Picture | Picture[] | null | undefined;
	status: number;
	ok: boolean;
}
export type Collections = "profiles" | "messages";