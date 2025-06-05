import Button from "@/components/Button";

export default function SignIn() {
  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSd1faGJWJr-emVSDcAEm54qHPHtMxgGcyDt8qQQ9rS3JyRrAA/viewform";
  
  return (
    <div className="flex flex-col items-center gap-sm w-full">
      <Button
        href={formLink}
        text="Open Sign-in Form in New Tab" 
      />
      <div className="w-full flex justify-center">
        <iframe 
          src={`${formLink}?embedded=true`} 
          className="border-0 w-full h-[1000px]"
        >
          Loading…
        </iframe>
      </div>
    </div>
  )
}