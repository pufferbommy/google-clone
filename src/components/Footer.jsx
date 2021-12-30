import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="py-4 px-8 bg-[#f2f2f2] text-[#70757a]">Thailand</div>
      <hr className="border-[#dadce0]" />
      <div className="py-4 px-8 flex text-[#70757a] justify-between bg-[#f2f2f2]">
        <div className="flex gap-8">
          <a
            className="cursor-pointer hover:underline"
            href="https://about.google/?utm_source=google-TH&utm_medium=referral&utm_campaign=hp-footer&fg=1"
          >
            About
          </a>
          <a
            className="cursor-pointer hover:underline"
            href="https://www.google.com/intl/en_th/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
          >
            Advertising
          </a>
          <a
            className="cursor-pointer hover:underline"
            href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1"
          >
            Business
          </a>
          <a
            className="cursor-pointer hover:underline"
            href="https://google.com/search/howsearchworks/?fg=1"
          >
            How Search works
          </a>
        </div>
        <div className="flex gap-8 text-[#70757a]">
          <a
            className="cursor-pointer hover:underline"
            href="https://policies.google.com/privacy?hl=en-TH&fg=1"
          >
            Privacy
          </a>
          <a
            className="cursor-pointer hover:underline"
            href="https://policies.google.com/terms?hl=en-TH&fg=1"
          >
            Terms
          </a>
          <a className="cursor-pointer hover:underline" href="#">
            Settings
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
