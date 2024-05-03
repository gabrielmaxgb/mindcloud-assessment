import { ReactElement } from "react";

export interface IStep {
	id: string;
	name: string;
	stepNumber: number;
	pings: number;
	isError: boolean;
	icon: ReactElement;
	options?: number;
}
