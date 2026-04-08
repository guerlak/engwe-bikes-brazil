import { NavbarNested } from '@/components/navbarNested';
import { Footer } from '@/components/footer';
import { ShieldCheck, Clock, CheckCircle2, AlertCircle, Mail, Phone, Info } from 'lucide-react';

export default function WarrantyPage() {
    return (
        <main className="min-h-screen bg-white">
            <NavbarNested />

            {/* Header Section */}
            <section className="pt-32 pb-16 bg-zinc-50 border-b border-zinc-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl mb-6">
                        <ShieldCheck className="w-8 h-8" />
                    </div>
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-zinc-900 mb-6 font-space">
                        Política de Garantia
                    </h1>
                    <p className="text-zinc-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        Na Engwe Brasil, garantimos a qualidade e durabilidade de nossas e-bikes. Confira abaixo os detalhes da nossa cobertura e como proceder em caso de necessidade.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4">

                    {/* General Policy */}
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <CheckCircle2 className="w-6 h-6 text-orange-500" />
                            <h2 className="text-2xl font-bold text-zinc-900 font-space">Resumo da Garantia</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                                <p className="text-zinc-700 leading-relaxed">
                                    As peças de reposição são **gratuitas** para danos não humanos dentro do período de garantia.
                                </p>
                            </div>
                            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                                <p className="text-zinc-700 leading-relaxed">
                                    Após o período de garantia, o cliente é responsável pelo custo das peças e do frete.
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 flex gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100 text-orange-800 text-sm italic">
                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                            <p>Nota Importante: E-bikes de segunda mão ou modificadas não possuem cobertura de garantia.</p>
                        </div>
                    </div>

                    {/* Warranty Tables */}
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <Clock className="w-6 h-6 text-orange-500" />
                            <h2 className="text-2xl font-bold text-zinc-900 font-space">Tabela de Cobertura Detalhada</h2>
                        </div>

                        {/* Basic Parts */}
                        <div className="mb-10 overflow-hidden rounded-2xl border border-zinc-100">
                            <div className="bg-zinc-900 text-white px-6 py-4">
                                <h3 className="font-bold">Peças Básicas</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-zinc-50 border-b border-zinc-100">
                                            <th className="px-6 py-4 font-bold text-sm text-zinc-900">Componente</th>
                                            <th className="px-6 py-4 font-bold text-sm text-zinc-900">Período</th>
                                            <th className="px-6 py-4 font-bold text-sm text-zinc-900 text-xs">Condições de Serviço</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-100">
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium">Quadro (Frame)</td>
                                            <td className="px-6 py-4 text-sm">12 Meses</td>
                                            <td className="px-6 py-4 text-sm text-zinc-500">Defeitos de fabricação (solda, deformação). Exclui colisões.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium">Garfo, Guidão, Canote</td>
                                            <td className="px-6 py-4 text-sm">12 Meses</td>
                                            <td className="px-6 py-4 text-sm text-zinc-500">Defeitos de fabricação.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium">Pneus</td>
                                            <td className="px-6 py-4 text-sm">1 Mês</td>
                                            <td className="px-6 py-4 text-sm text-zinc-500">Defeitos de fábrica apenas. Exclui furos e desgaste natural.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium">Selim, Freios, Pedais</td>
                                            <td className="px-6 py-4 text-sm">3 Meses</td>
                                            <td className="px-6 py-4 text-sm text-zinc-500">Defeitos de fabricação. Peças de desgaste contínuo.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium">Paralamas, Bagageiro, Luzes</td>
                                            <td className="px-6 py-4 text-sm">6 Meses</td>
                                            <td className="px-6 py-4 text-sm text-zinc-500">Defeitos de fabricação.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Electrics & Motor */}
                        <div className="mb-10 overflow-hidden rounded-2xl border border-zinc-100">
                            <div className="bg-zinc-900 text-white px-6 py-4">
                                <h3 className="font-bold">Eletrônicos e Motor</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-zinc-50 border-b border-zinc-100">
                                            <th className="px-6 py-4 font-bold text-sm text-zinc-900">Componente</th>
                                            <th className="px-6 py-4 font-bold text-sm text-zinc-900">Período</th>
                                            <th className="px-6 py-4 font-bold text-sm text-zinc-900 text-xs">Condições de Serviço</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-100">
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium">Motor</td>
                                            <td className="px-6 py-4 text-sm">12 Meses</td>
                                            <td className="px-6 py-4 text-sm text-zinc-500">Falhas de fabricação (ex: bobina queimada). Exclui deformações no cubo.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium">Controlador, Carregador, Display</td>
                                            <td className="px-6 py-4 text-sm">12 Meses</td>
                                            <td className="px-6 py-4 text-sm text-zinc-500">Falhas de fabricação. Exclui danos por água ou mau uso.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium">Bateria</td>
                                            <td className="px-6 py-4 text-sm">12 Meses</td>
                                            <td className="px-6 py-4 text-sm text-zinc-500">Capacidade abaixo de 60% ou falhas eletrônicas.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Exclusions */}
                    <div className="mb-16 bg-zinc-50 p-8 rounded-3xl border border-zinc-100">
                        <div className="flex items-center gap-3 mb-6">
                            <AlertCircle className="w-6 h-6 text-red-500" />
                            <h2 className="text-2xl font-bold text-zinc-900 font-space">O que NÃO é coberto pela garantia?</h2>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Danos resultantes de não seguir as instruções de uso e manutenção do manual.",
                                "Desmontagem, reparo ou modificação não autorizada por técnicos Engwe.",
                                "Danos causados por acidentes, uso impróprio ou armazenamento inadequado.",
                                "Custos de reparo em oficinas não autorizadas sem aprovação prévia por escrito.",
                                "Danos estéticos leves na embalagem externa durante o transporte.",
                                "Peças consumíveis (pneus, pastilhas de freio, cabos de freio) após o período inicial."
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-zinc-600">
                                    <span className="text-orange-500 font-bold">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* How to Apply */}
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <Info className="w-6 h-6 text-orange-500" />
                            <h2 className="text-2xl font-bold text-zinc-900 font-space">Como solicitar a garantia?</h2>
                        </div>
                        <div className="space-y-6">
                            {[
                                { step: "Passo 1", text: "Capture fotos ou um vídeo curto mostrando claramente o problema encontrado." },
                                { step: "Passo 2", text: "Envie um e-mail com a descrição do problema, as fotos/vídeos e o número do seu pedido." },
                                { step: "Passo 3", text: "Nossa equipe irá avaliar o caso e fornecer uma solução ou instruções de diagnóstico." },
                                { step: "Passo 4", text: "Após a verificação, enviaremos as peças de reposição necessárias para o seu endereço." }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded min-w-[70px] text-center mt-1">
                                        {item.step}
                                    </div>
                                    <p className="text-zinc-700 leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Support */}
                    <div className="bg-orange-600 rounded-3xl p-10 text-white text-center shadow-xl shadow-orange-500/20">
                        <h3 className="text-2xl font-bold mb-4 font-space">Dúvidas sobre a garantia?</h3>
                        <p className="text-white/80 mb-8">Nossa equipe de suporte está pronta para ajudar com qualquer questão técnica.</p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <a href="mailto:contato@engwe.com.br" className="flex items-center gap-2 hover:bg-white/10 px-6 py-3 rounded-full transition-colors font-bold border border-white/20">
                                <Mail className="w-5 h-5" />
                                contato@engwe.com.br
                            </a>
                            {/* <div className="flex items-center gap-2 opacity-80">
                <Phone className="w-5 h-5" />
                Seg – Sex (09:00 – 18:00)
              </div> */}
                        </div>
                    </div>

                </div>
            </section>


        </main>
    );
}
