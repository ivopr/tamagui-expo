import { FC, ReactNode } from "react";

declare global {
	type FCC<T = object> = FC<{ children?: ReactNode } & T>;
}
