import type { CreateGown } from "./CreateGown";

export interface GownFormProps {
    onSave: (gown: CreateGown) => void | Promise<void>;
    initialData?: CreateGown | null;
}