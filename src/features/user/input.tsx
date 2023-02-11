import { FC } from "react";
import { Fieldset, Input, Label } from "tamagui";

interface FormInputProps {
	fieldId: string;
	label: string;
	placeholder: string;
}

export const InputDemo: FC<FormInputProps> = ({
	fieldId,
	label,
	placeholder
}) => {
	return (
		<Fieldset>
			<Label htmlFor={fieldId}>{label}</Label>
			<Input
				id={fieldId}
				placeholder={placeholder}
			/>
		</Fieldset>
	);
};
