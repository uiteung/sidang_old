import {getCookie} from "https://jscroot.github.io/cookie/croot.js"
export var urlPost = "https://mrt.ulbi.ac.id/notif/sidang"
export var TokenKey = "Login"

export var TokenLogin = getCookie("login")

// export var TokenLogin = "v4.public.eyJleHAiOiIyMDIzLTA3LTExVDAxOjA4OjA2KzA3OjAwIiwiaWF0IjoiMjAyMy0wNy0xMFQyMzowODowNiswNzowMCIsImlkIjoiNjI4MTMxNjc2OTY1NiIsIm5iZiI6IjIwMjMtMDctMTBUMjM6MDg6MDYrMDc6MDAifTGjDJSeHQFDIACRHpPrAbpdQ47jHkt3an5tBWk6SCiiHl8NytbRvqf1BfUaymXEXKk3Sqt-mxf8hHDihug-RwQ"

export let rowtabel = `<table class="table-auto">
<thead>
  <tr>
    <th>Data Sidang</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>
        <p>Jadwal Sidang besok pukul 09.00 WIB</p>
        <p>Lokasi Prodi</p>
        <p>Segera Hubungi Penguji dan Pembimbing</p>
        <p>NPM : #npm#</p>
        <p>Nama : #nama#</p>
        <p>Penguji : #penguji#</p>
        <p>Pembimbing : #pembimbing#</p></td>
  </tr>
</tbody>
</table>`
// export let rowtabel = `
// <p>NPM : #npm#</p>
// <p>Nama : #nama#</p>
// <p>Penguji : #penguji#</p>
// <p>Pembimbing : #pembimbing#</p>
// `