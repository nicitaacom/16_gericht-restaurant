interface ChairProps {
  className?: string
  reverse?: boolean
  back?: boolean
}

export function Chair({ className, reverse, back }: ChairProps) {
  return (
    <div className={`chair-container ${className} ${reverse && 'scale-x-[-1]'}`}>
      <div className={back ? 'chair-back-body' : 'chair-body'} />
      <div className={back ? 'chair-back-footer' : 'chair-footer'} />
    </div>
  )
}