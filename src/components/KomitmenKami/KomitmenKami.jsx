import React from "react";
import { cepat, integrasi, konsultasi } from "../../assets/picture";

const KomitmenKami = () => {
  const fiturLayanan = [
    {
      id: 1,
      image: konsultasi,
      title: "Konsultasi Gratis dan Tanpa Kewajiban",
      desc: "Kami mengerti bahwa memulai bisnis dapat menjadi tantangan. Oleh karena itu, kami menawarkan konsultasi gratis dan tanpa kewajiban untuk membantu Anda memahami proses perizinan yang dibutuhkan",
    },
    {
      id: 2,
      image: cepat,
      title: "Proses Cepat dan Efisien",
      desc: "Layanan Uruzin menjamin proses cepat dan efisien dalam pengurusan perizinan dan dokumentasi. Dengan pendekatan yang terorganisir, pelanggan dapat menghemat waktu dan mendapatkan izin usaha lebih cepat.",
    },
    {
      id: 3,
      image: integrasi,
      title: "Paket Layanan Terintegrasi",
      desc: "Solusi lengkap dalam satu tempat! Uruzin menawarkan paket layanan terintegrasi yang mencakup pembuatan badan hukum, pengurusan perizinan, dan layanan notaris digital. Hemat waktu dan tenaga dengan layanan all-in-one kami.",
    },
  ];

  const validasiLayanan = [
    {
      id: 1,
      title: "25+",
      desc: " Solusi Layanan Perizinan",
    },
    {
      id: 2,
      title: ">30",
      desc: "Pengurusan Sertifikasi Halal",
    },
    {
      id: 3,
      title: "10+",
      desc: "Legal Partner Berpengalaman",
    },
    {
      id: 4,
      title: "3M",
      desc: "Job posted everydays with  qualification",
    },
  ];
  return (
    <section className="max-w-[1170px]">
      <article className="flex-col flex justify-center gap-[21px] max-w-[1109px] mb-5">
        <h2 className="font-poppins font-light text-[12px] leading-normal text-green-uruzin tracking-[2px] rounded-[10px] border border-solid border-green-uruzin py-[5px] px-7 max-w-max ml-2">
          KOMITMEN KAMI
        </h2>
        <h1 className="font-poppins font-medium text-[40px] leading-[50px] text-dark-blue-uruzin -tracking-[0.5px]">Percayakan Urusan Anda kepada Uruzin</h1>
        <p className="font-poppins font-normal text-[16px] leading-[35px] text-gray-uruzin tracking-[0px]">
          Kami bukan sekadar penyedia layanan, tapi mitra dalam kesuksesan bisnis Anda. Percayakan semua urusan izin
          pada Uruzin, karena keberhasilan Anda adalah komitmen kami.
        </p>
      </article>
      {/* //? Section Bawah  ///////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="flex gap-[115px]">
        <ul className="flex-col flex gap-10 my-[31.5px] w-max">
          {fiturLayanan.map(({ id, image, title, desc }) => {
            return (
              <li className="flex">
                <img src={image} alt={title} className="bg-light-green-uruzin max-h-9 p-2 rounded-lg mr-4" />
                <div className="flex-col flex w-max">
                  <h1 className="font-dm font-normal text-[18px] leading-normal text-primary-content-uruzin tracking-[0px] mb-[10px]">{title}</h1>
                  <p className="font-poppins font-normal text-[15px] leading-[30px] text-secondary-content-uruzin tracking-[0px] max-w-[352px]">{desc}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <div class="flex gap-[45px] w-[50%]">
          <div className="flex flex-col gap-4 mt-[67px]">
            {validasiLayanan.slice(0, 2).map(({ id, title, desc }) => {
              return (
                <div className="flex flex-col px-[87px] py-[98px] mb-[45px] text-center w-[300px] rounded-[10px] bg-white-pure drop-shadow-[0_25px_100px_#44589d14]">
                  <div>
                    <h1 className="font-dm font-medium text-[72px] leading-[55px] -tracking-[1.5px] text-green-uruzin">{title}{id === 2 && <small className="font-dm font-medium text-[20px] leading-[55px] -tracking-[1.5px] text-green-uruzin">Hari</small>}</h1>
                  </div>
                  <div>
                    <p className="font-poppins font-normal text-[17px] leading-[25px] -tracking-[0.2px] text-dark-blue-uruzin">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-4">
            {validasiLayanan.slice(2).map(({ id, title, desc }) => {
              return (
                <div className="flex flex-col px-[87px] py-[98px] mb-[45px] text-center w-[300px] rounded-[10px] bg-white-pure drop-shadow-[0_25px_100px_#44589d14]">
                  <div>
                    <h1 className="font-dm font-medium text-[72px] leading-[55px] -tracking-[1.5px] text-green-uruzin">{title}</h1>
                  </div>
                  <div>
                    <p className="font-poppins font-normal text-[17px] leading-[25px] -tracking-[0.2px] text-dark-blue-uruzin">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt="yo"
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                alt="bi"
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                alt="a"
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                alt="b"
              />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default KomitmenKami;
