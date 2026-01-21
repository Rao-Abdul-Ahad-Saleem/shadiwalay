import { group } from "console"
import { DetailedHTMLProps, HTMLAttributes } from "react"

declare global {
    namespace jsx {
        interface IntrinsicElements{
            "el-popover-group" : any;
            "el-popover" : any;
            "el-dialog" : any;
            "el-dialog-panel": any;
            "el-disclouser" : any;


        }
    }
}