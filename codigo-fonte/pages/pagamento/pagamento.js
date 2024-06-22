function mudarMetodoPagamento(metodo) {
    const form = document.getElementById('paymentForm');

    if (metodo === 'pix') {
        form.innerHTML = `
        <div>
            <div class="input-group">
                <input type="radio" name="paymentMethod" id="creditCard" value="creditCard"
                    onclick="mudarMetodoPagamento('creditCard')">
                <label for="creditCard">Cartão de Crédito ou Débito</label>
            </div>

            <div class="input-group">
                <input type="radio" name="paymentMethod" id="pix" value="pix" checked
                    onclick="mudarMetodoPagamento('pix')">
                <label for="pix">PIX</label>
            </div>
        </div>

        <div class="pix-method">
            <div class="pix-qrcode">
                <img src="./img/qrcode.png" alt="QR Code">
            </div>

            <div class="input-pix-group">
                <label for="pixCode">Código PIX</label>
                <input type="text" id='pixCode' name="pixCode"
                    value="596489DAS7DCAS4453CWSCQWEERQW.qrcode.pix" autocomplete="off" disabled>

                <div class="input-button">
                    <button type="button">Copiar QR Code</button>
                </div>
            </div>
        </div>
        `
    }

    if (metodo === 'creditCard') {
        form.innerHTML = `
        <div>
            <div class="input-group">
            <input type="radio" name="paymentMethod" id="creditCard" value="creditCard" checked
                onclick="mudarMetodoPagamento('creditCard')">
            <label for="creditCard">Cartão de Crédito ou Débito</label>
            </div>

            <div class="input-group">
                <input type="radio" name="paymentMethod" id="pix" value="pix"
                    onclick="mudarMetodoPagamento('pix')">
                <label for="pix">PIX</label>
            </div>
        </div>

        <div>
            <div class="input-group-numerocartao">
                <input type="text" name="numerocartao" placeholder="Número do cartão" required>
            </div>

            <div class="input-group-numeros-cartao">
                <div class="input-group-validade">
                    <select name="expiryMonth" class="select-expiry-month">
                        <option value="00">Mês</option>
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="6">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <select name="expiryYear" class="select-expiry-year">
                        <option value="0000">Ano</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                        <option value="2031">2031</option>
                        <option value="2032">2032</option>
                        <option value="2033">2033</option>
                        <option value="2034">2034</option>
                        <option value="2035">2035</option>
                    </select>
                </div>

                <div class="input-group-cvvcartao">
                    <input type="tel" name="cvv" placeholder="CVV" required>
                </div>
            </div>

            <div class="input-group-nomecartao">
                <input type="text" name="nomecartao" placeholder="Nome no Cartão" required>
            </div>
        </div>

        <div class="input-button">
            <button type="button" onclick="formSubmit()">Confirmar</button>
        </div>
        `
    }
}

function formSubmit() {
    const paymentMethod = document.paymentForm.paymentMethod.value;

    if (paymentMethod === "creditCard") {
        const numeroCartao = document.paymentForm.numerocartao.value;
        const expiryMonth = document.paymentForm.expiryMonth.value;
        const expiryYear = document.paymentForm.expiryYear.value;
        const cvv = document.paymentForm.cvv.value;
        const nomeCartao = document.paymentForm.nomecartao.value;

        const dadosPagamento = {
            metodo: paymentMethod,
            numeroCartao,
            expiryMonth,
            expiryYear,
            cvv,
            nomeCartao
        };

        const doacao = JSON.parse(localStorage.getItem('@VAT:doacao'));

        const doacoesRecebidas = JSON.parse(localStorage.getItem('@VAT:doacoes_recebidas')) ?? []

        const indexDoacao = doacoesRecebidas.findIndex(acharDoacao => acharDoacao.institution === doacao.institution)

        if (indexDoacao >= 0) {
            doacoesRecebidas[indexDoacao].doacoes.push(doacao)
            doacoesRecebidas[indexDoacao].valorTotal += Number(doacao.donationAmount)
        } else {
            doacoesRecebidas.push({ institution: doacao.institution, doacoes: [doacao], valorTotal: Number(doacao.donationAmount) });
        }

        localStorage.setItem("@VAT:doacoes_recebidas", JSON.stringify(doacoesRecebidas));

        localStorage.removeItem("@VAT:doacao");

    } else if (paymentMethod === "pix") {
        const dadosPagamento = {
            metodo: paymentMethod,
            chavePix: "596489DAS7DCAS4453CWSCQWEERQW.qrcode.pix"
        };

        const doacao = JSON.parse(localStorage.getItem('@VAT:doacao'));

        const doacoesRecebidas = JSON.parse(localStorage.getItem('@VAT:doacoes_recebidas')) ?? []

        const indexDoacao = doacoesRecebidas.findIndex(acharDoacao => acharDoacao.institution === doacao.institution)

        if (indexDoacao >= 0) {
            doacoesRecebidas[indexDoacao].doacoes.push(doacao)
            doacoesRecebidas[indexDoacao].valorTotal += Number(doacao.donationAmount)
        } else {
            doacoesRecebidas.push({ institution: doacao.institution, doacoes: [doacao], valorTotal: Number(doacao.donationAmount) });
        }

        localStorage.removeItem("@VAT:doacao");
        
    }

    alert(`Pagamento efetuado com sucesso!`);

}