
import { XIcon } from "lucide-react"
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
} from "@/components/ui/morphing-dialog"



export function ProjectVideo({ src, children }) {

  return (
    <MorphingDialog >
      <MorphingDialogTrigger asChild>
        <div >
          {children}
        </div>
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-0" />

        <MorphingDialogContent
      
          className="relative z-10 aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50"
        >
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>

        <MorphingDialogClose
        
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1 z-20"
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}
