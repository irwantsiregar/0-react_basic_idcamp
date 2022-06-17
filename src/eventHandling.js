/* 
  # Event Handling

  Sejatinya event handling di React mirip dengan apa yang kita lakukan pada DOM element. Contohnya, secara standar kita dapat menetapkan event pada element dengan cara seperti ini.

  <button onclick="increaseValue()">
    Increase Value
  </button>

Berbeda dengan React, untuk menetapkan event, Anda dapat melakukannya dengan cara seperti berikut.

  <button onClick={increaseValue}>
    Increase Value
  </button>

Dalam pemberian nama event, alih-alih menggunakan lowercase, React selalu menggunakan camelCase. Jadi penulisan event onclick di React adalah onClick.
*/

/* 
Props Drilling Event Handler
Data atau state sebaiknya berada di parent component dan hanya boleh diubah oleh komponen itu sendiri sehingga fungsi handler--yang notabene akan mengubah state--haruslah berada di parent component.

Ketika Anda memecah belah komponen menjadi komponen yang lebih kecil, kemungkinan Anda akan menemukkan kasus di mana component yang menerima input pengguna--contohnya tombol--dibuat secara terpisah dari parent component. Ketika ini terjadi, Anda perlu memberikan event handler melalui props secara drilling. Hal ini sangat umum dilakukan karena React menganut konsep unidirectional data flow.

Perhatikan bagan berikut:
  EventHandling.png

State count hidup di dalam component CounterApp yang merupakan parent component dari seluruh komponen yang ditampilkan. Karena CounterApp pemilik data, maka ia-lah yang berhak memperbarui datanya melalui fungsi onIncreaseEventHandler yang dimilikinya.

Bagan di atas menunjukkan bahwa kita memecah UI berdasarkan tugas. Tugas pertama yaitu menampilkan data count didelegasikan pada component CounterScreen sehingga komponen tersebut diberikan data count oleh parent (CounterApp) melalui props.

Selanjutnya, tugas keduanya yaitu menerima input--untuk menambah nilai count--yang didelegasikan kepada component IncreaseButton. Di sinilah praktik props drilling event handler dilakukan. IncreaseButton tidak berhak untuk mengubah data count, itulah sebabnya ia diberikan fungsi handler milik parent melalui props. Nantinya fungsi handler digunakan ketika IncreaseButton menerima sinyal input (click) dari pengguna.

Data yang disimpan di dalam state bersifat reaktif. Jika datanya berubah, ia akan me-render ulang komponen yang ditampilkan sehingga data yang tampak akan selalu up-to-date.

Sampai di sini, semoga Anda sudah memiliki gambaran bagaimana menerapkan event handling pada React. Supaya pemahaman Anda lebih dalam, mari kita praktikkan teori yang sudah Anda dapatkan sejauh ini di modul selanjutnya.
*/