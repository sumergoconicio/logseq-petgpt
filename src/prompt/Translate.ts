import {Prompt} from "../types/Prompt";

export class Translate {
    public static getPrompts() : Prompt[] {
        const languages = ['Arabic', 'Dutch', 'English', 'French', 'German', 'Hindi', 'Japanese', 'Mandarin Chinese', 'Russian', 'Sanskrit', 'Spanish', 'Urdu',];
        return languages.map((lang) => ({
            name: `Translate to ${lang}`,
            required_input: 'block(s)',
            getPrompt: () => `Translate to ${lang}:`,
            group: 'translate'
        }));
    }
}
