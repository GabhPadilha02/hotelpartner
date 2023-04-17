"use client"
import { send } from '@emailjs/browser';
import { useState } from 'react';
import { format } from 'date-fns';
import style from "./style.module.scss"
import Image from 'next/image';
import mdaForm from "../../../../public/assets/mdaForm.png"

export function ContactForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [observacoes, setObservacoes] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const checkinFormatted = format(new Date(checkin), 'dd/MM/yyyy');
    const checkoutFormatted = format(new Date(checkout), 'dd/MM/yyyy');

    const templateParams = {
      nome: nome,
      email: email,
      checkin: checkinFormatted,
      checkout: checkoutFormatted,
      observacoes: observacoes,
      tel: tel
    }

    send("service_cek2bud", "template_tedu9gx", templateParams, "zyERKQiqd_R47wlGu")
    .then((res) => {
      console.log(res.status, "email enviado!")
      setNome("")
      setEmail("")
      setCheckin("")
      setCheckout("")
      setObservacoes("")
      setTel("")
    }, (err) => {
      alert("Erro no envio do email :(")
    })
  };

  const handlePhone = (event: any) => {
    const input = event.target
    input.value = phoneMask(input.value)
  }

  const phoneMask = (value: any) => {
    if (!value) return ''
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, '($1) $2')
    value = value.replace(/(\d)(\d{4})$/, '$1-$2')
    return value
  }

  return (
    <div className={style.bg}>
      <Image src={mdaForm} alt=""/>
      <div className={style.container}>
        <form onSubmit={handleSubmit} >
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />

          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label htmlFor="tel">Telefone:</label>
          <input
            type="tel"
            id="tel"
            name="tel"
            placeholder='(99) 99999-9999'
            maxLength={15}
            onKeyUp={(event) => handlePhone(event)}
            required
            value={tel}
            onChange={(event) => setTel(event.target.value)}
          />

          <label htmlFor="checkin">Check-in:</label>
          <input
            type="date"
            id="checkin"
            name="checkin"
            required
            value={checkin}
            onChange={(event) => setCheckin(event.target.value)}
          />

          <label htmlFor="checkout">Check-out:</label>
          <input
            type="date"
            id="checkout"
            name="checkout"
            required
            value={checkout}
            onChange={(event) => setCheckout(event.target.value)}
          />

          <label htmlFor="observacoes">Observações da reserva:</label>
          <textarea
            id="observacoes"
            name="observacoes"
            rows={5}
            value={observacoes}
            onChange={(event) => setObservacoes(event.target.value)}
          ></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
    
  );
}
