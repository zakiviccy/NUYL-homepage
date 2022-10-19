import React from 'react'


/* <script async src="https://cse.google.com/cse.js?cx=2cca6b64d8673a1e0"></script>
<div class="gcse-search"></div>*/


const search = () => {
  const cx = '2cca6b64d8673a1e0' //ここに貼り付け用コードの?cx=以下を入力
  let gcse = document.createElement('script')
  gcse.type = 'text/javascript'
  gcse.async = true
  gcse.src = 'https://cse.google.com/cse.js?cx=' + cx
  let s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(gcse, s)
  return <div className="gcse-search"></div>
}

export default search
