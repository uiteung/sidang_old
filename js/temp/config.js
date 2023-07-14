import {getCookie} from "https://jscroot.github.io/cookie/croot.js"
export var urlPost = "https://mrt.ulbi.ac.id/notif/sidang"
export var TokenKey = "Login"

export var TokenLogin = getCookie("login")

// export var TokenLogin = "v4.public.eyJleHAiOiIyMDIzLTA3LTEzVDIwOjA1OjI5KzA3OjAwIiwiaWF0IjoiMjAyMy0wNy0xM1QxODowNToyOSswNzowMCIsImlkIjoiNjI4MTMxNjc2OTY1NiIsIm5iZiI6IjIwMjMtMDctMTNUMTg6MDU6MjkrMDc6MDAifY7c7Wde8MAFITf4a3_WbnEW-6lsOhckTgyYo6zU6BdaY9fw_QjxcI923OKuAHmzaqRGjqGVcjNOErt228fWjgA"

export let rowtabel = `<table class="table-auto">
<thead>
  <tr>
    <th>Data Sidang</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>
        <p>Jadwal Sidang Menunggu Verikasi Persyaratan Sidang</p>
        <p>Oleh Prodi s/d tgl 24 Juli 2023</p>
        <p>Informasi Penguji dan Pembimbing</p>
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