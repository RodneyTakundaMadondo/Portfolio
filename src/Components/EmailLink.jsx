export function EmailLink() {
    const user = 'madondotakundaoriginal';
    const domain = "gmail.com";
    const email = `${user}@${domain}`;
    return (
        <a href={`mailto:${email}`}
            className="email-link rotate-90 origin-top-left z-[100] relative hover:text-[var(--text-primary)] left-[1.7rem] hover:cursor-pointer hover:translate-y-[-8px] transition-all duration-300 ease-in-out  h-8 text-[var(--text-secondary)] text-sm">{email}</a>
    )
}
