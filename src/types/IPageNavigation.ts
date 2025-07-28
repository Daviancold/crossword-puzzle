import { SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"

export interface IBackwardPage {
    backPage: () => void,
}

export interface IForwardPage {
    forwardPage: () => void
}

export interface ITextPage {
    textFirstLn: string,
    textSecondLn: string,
    buttonText?: string,
    ButtonIcon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>, 
    backwardNav?: () => void,
    forwardNav?: () => void,
    textProps?: string,
}

export interface IBidirectionalPage {
    backPage: () => void
    forwardPage: () => void
}