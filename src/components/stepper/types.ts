import { ReactElement } from "react";

export interface IStep {
	id: string;
	name: string;
	stepNumber: number;
	isError: boolean;
	icon: ReactElement;
	options?: number;
}
