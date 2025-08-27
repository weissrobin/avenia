export const IntroAnimation = () => {
    return (
         <>
            <div className="image-part flex-1 bg-cover bg-left bg-no-repeat -translate-y-full animate-slide-in"></div>
            <div className="image-part flex-1 bg-cover bg-center bg-no-repeat -translate-y-full animate-slide-in"></div>
            <div className="image-part flex-1 bg-cover bg-right bg-no-repeat -translate-y-full animate-slide-in"></div>
         </>
    )
}