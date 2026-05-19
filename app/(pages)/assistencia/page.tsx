'use client';

import { useState, useMemo } from 'react';
import { NavbarNested } from '@/components/navbarNested';
import { Footer } from '@/components/footer';
import {
	Search,
	MapPin,
	Star,
	Phone,
	Wrench,
	ChevronDown,
	ChevronUp,
	Check,
	ExternalLink,
	Sparkles,
	ShieldCheck,
	Store,
	ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Tipagem estruturada das oficinas
interface AssistanceLocation {
	id: string;
	name: string;
	neighborhood: string;
	rating?: number;
	reviewsCount?: number;
	phone: string;
	city: string;
	state: string; // Ex: "SP", "RJ"
}

// Banco de dados completo com as localizações fornecidas
const LOCATIONS_DATA: AssistanceLocation[] = [
	// Rio de Janeiro / RJ
	{ id: 'rj-1', name: 'Oficina Urban Volt', neighborhood: 'Botafogo', rating: 5.0, phone: '(21) 99381-8787', city: 'Rio de Janeiro', state: 'RJ' },
	{ id: 'rj-2', name: 'Din Bike Elétrica', neighborhood: 'Recreio', rating: 4.8, phone: '(21) 99974-5876', city: 'Rio de Janeiro', state: 'RJ' },

	// São Paulo / SP
	{ id: 'sp-1', name: 'Ebike Motorizada', neighborhood: 'Vila Prudente', rating: 4.9, phone: '(11) 99107-0865', city: 'São Paulo', state: 'SP' },
	{ id: 'sp-2', name: 'MagaBike', neighborhood: 'Vila Madalena', rating: 4.4, phone: '(11) 3032-5032', city: 'São Paulo', state: 'SP' },
	{ id: 'sp-3', name: 'Scoobike', neighborhood: 'Pinheiros', rating: 4.4, phone: '(11) 99001-8579', city: 'São Paulo', state: 'SP' },

	// Belo Horizonte / MG
	{ id: 'mg-1', name: 'Girobh Bike Store', neighborhood: 'Geral', rating: 4.8, phone: '(31) 99150-9523', city: 'Belo Horizonte', state: 'MG' },
	{ id: 'mg-2', name: 'BH Sport Cicle', neighborhood: 'Planalto', rating: 4.5, phone: '(31) 3433-8532', city: 'Belo Horizonte', state: 'MG' },
	{ id: 'mg-3', name: 'Eletromotos BH', neighborhood: 'Santa Branca', rating: 5.0, phone: '(31) 98785-8942', city: 'Belo Horizonte', state: 'MG' },

	// Brasília / DF
	{ id: 'df-1', name: 'Vinny Manutenções', neighborhood: 'Riacho Fundo II', rating: 5.0, phone: '(61) 99346-6888', city: 'Brasília', state: 'DF' },
	{ id: 'df-2', name: 'Aquino Bike Elétrica', neighborhood: 'Geral', rating: 4.9, phone: '(61) 99652-8137', city: 'Brasília', state: 'DF' },
	{ id: 'df-3', name: 'Super Bike 101', neighborhood: 'Sudoeste / Octogonal', rating: 4.7, phone: '(61) 97400-7887', city: 'Brasília', state: 'DF' },

	// Curitiba / PR
	{ id: 'pr-1', name: 'NXT Mobilidade Elétrica', neighborhood: 'Orleans', rating: 4.9, phone: '(41) 99630-9513', city: 'Curitiba', state: 'PR' },
	{ id: 'pr-2', name: 'Two Dogs', neighborhood: 'Rebouças', rating: 4.6, phone: '(41) 99185-0337', city: 'Curitiba', state: 'PR' },
	{ id: 'pr-3', name: 'Cicles Jaime', neighborhood: 'Rebouças', rating: 4.3, phone: '(41) 3333-3456', city: 'Curitiba', state: 'PR' },

	// Porto Alegre / RS
	{ id: 'rs-1', name: 'Kallo', neighborhood: 'Hípica', rating: 5.0, phone: '(51) 99962-7878', city: 'Porto Alegre', state: 'RS' },
	{ id: 'rs-2', name: 'Bike Village', neighborhood: 'Petrópolis', rating: 4.6, phone: '(51) 3103-1359', city: 'Porto Alegre', state: 'RS' },
	{ id: 'rs-3', name: 'Personal Biker', neighborhood: 'Floresta', rating: 4.2, phone: '(51) 98318-8311', city: 'Porto Alegre', state: 'RS' },

	// Salvador / BA
	{ id: 'ba-1', name: 'Clínica das Bicicletas', neighborhood: 'STIEP', rating: 4.9, phone: '(71) 3014-6717', city: 'Salvador', state: 'BA' },
	{ id: 'ba-2', name: 'ConsertaBike Salvador', neighborhood: 'Stella Maris', rating: 5.0, phone: '(71) 99216-9269', city: 'Salvador', state: 'BA' },

	// Fortaleza / CE
	{ id: 'ce-1', name: 'Villas Bike Shop', neighborhood: 'Geral', rating: 4.9, phone: '(85) 99757-9171', city: 'Fortaleza', state: 'CE' },
	{ id: 'ce-2', name: 'WS Assistência Técnica', neighborhood: 'José de Alencar', rating: 4.7, phone: '(85) 98113-3735', city: 'Fortaleza', state: 'CE' },
	{ id: 'ce-3', name: 'Mutti Motors', neighborhood: 'Meireles', rating: 4.7, phone: '(85) 99787-7223', city: 'Fortaleza', state: 'CE' },

	// Recife / PE
	{ id: 'pe-1', name: 'Fast Scooter', neighborhood: 'Boa Viagem', rating: 4.9, phone: '(81) 99635-6458', city: 'Recife', state: 'PE' },
	{ id: 'pe-2', name: 'New Bike', neighborhood: 'Boa Vista', rating: 4.9, phone: '(81) 99981-4009', city: 'Recife', state: 'PE' },

	// Florianópolis / SC
	{ id: 'sc-1', name: 'ET Bike', neighborhood: 'Rio Tavares', rating: 4.8, phone: '(48) 99914-6847', city: 'Florianópolis', state: 'SC' },
	{ id: 'sc-2', name: 'Eletric Scooters Floripa', neighborhood: 'Estreito', rating: 4.8, phone: '(48) 99180-3377', city: 'Florianópolis', state: 'SC' },
	{ id: 'sc-3', name: 'Park Bikes Floripa', neighborhood: 'Coqueiros', rating: 4.7, phone: '(48) 3240-2336', city: 'Florianópolis', state: 'SC' },

	// Manaus / AM
	{ id: 'am-1', name: 'Ciclo Peças do Messias', neighborhood: 'Alvorada', rating: 4.8, phone: '(92) 99359-8411', city: 'Manaus', state: 'AM' },
	{ id: 'am-2', name: 'Manaus Bike', neighborhood: 'Compensa', rating: 4.7, phone: '(92) 3671-8514', city: 'Manaus', state: 'AM' },
	{ id: 'am-3', name: 'Moto Leste Manaus', neighborhood: 'Tancredo Neves', rating: 4.5, phone: '(92) 99423-0063', city: 'Manaus', state: 'AM' },

	// Belém / PA
	{ id: 'pa-1', name: 'Nilbike', neighborhood: 'Cidade Velha', rating: 4.6, phone: '(91) 99196-5160', city: 'Belém', state: 'PA' },
	{ id: 'pa-2', name: 'Bike Espaço', neighborhood: 'Sacramenta', rating: 4.5, phone: '(91) 98027-0048', city: 'Belém', state: 'PA' },
	{ id: 'pa-3', name: 'Bike Mania Belém', neighborhood: 'São Brás', rating: 4.3, phone: '(91) 3249-0646', city: 'Belém', state: 'PA' },

	// Goiânia / GO
	{ id: 'go-1', name: 'MotoE Oficina Especializada', neighborhood: 'Setor Bueno', rating: 5.0, phone: '(62) 98118-8351', city: 'Goiânia', state: 'GO' },
	{ id: 'go-2', name: 'MD Bikes', neighborhood: 'Jardim América', rating: 5.0, phone: '(62) 3142-8018', city: 'Goiânia', state: 'GO' },
	{ id: 'go-3', name: 'Ricardo Bicicletas', neighborhood: 'Região Metro', rating: 4.9, phone: '(62) 99332-3383', city: 'Aparecida de Goiânia', state: 'GO' },

	// Vitória / ES
	{ id: 'es-1', name: 'GTR EBikes', neighborhood: 'Centro', rating: 5.0, phone: '(27) 99288-2290', city: 'Vitória', state: 'ES' },
	{ id: 'es-2', name: 'Emobi Bikes Elétricas', neighborhood: 'Jardim Camburi', rating: 4.8, phone: '(27) 99779-4838', city: 'Vitória', state: 'ES' },
	{ id: 'es-3', name: 'BEE GreenVix', neighborhood: 'Jardim da Penha', rating: 4.8, phone: '(27) 99731-0456', city: 'Vitória', state: 'ES' },

	// Natal / RN
	{ id: 'rn-1', name: 'ConsertaBike Natal', neighborhood: 'Pitimbu', rating: 5.0, phone: '(84) 98800-0020', city: 'Natal', state: 'RN' },
	{ id: 'rn-2', name: 'Mister Bike Natal', neighborhood: 'Lagoa Seca', rating: 4.9, phone: '(84) 2030-8395', city: 'Natal', state: 'RN' },
	{ id: 'rn-3', name: 'MM Bike Service', neighborhood: 'Candelária', rating: 4.8, phone: '(84) 99175-3138', city: 'Natal', state: 'RN' },

	// João Pessoa / PB
	{ id: 'pb-1', name: 'Bicicletaria Edbike', neighborhood: 'Bancários', rating: 4.8, phone: '(83) 98687-9874', city: 'João Pessoa', state: 'PB' },
	{ id: 'pb-2', name: 'Center Bike', neighborhood: 'Mangabeira', rating: 4.6, phone: '(83) 98716-4778', city: 'João Pessoa', state: 'PB' },
	{ id: 'pb-3', name: 'Allecto Assistência Técnica', neighborhood: 'Torre', rating: 4.7, phone: '(83) 99134-3361', city: 'João Pessoa', state: 'PB' },

	// Maceió / AL
	{ id: 'al-1', name: 'Eletrificar', neighborhood: 'Antares', rating: undefined, phone: '(82) 99644-7793', city: 'Maceió', state: 'AL' },

	// São Luís / MA
	{ id: 'ma-1', name: 'Tek Peças Calhau', neighborhood: 'Olho D\'Água', rating: 4.7, phone: '(98) 98235-9669', city: 'São Luís', state: 'MA' },
	{ id: 'ma-2', name: 'Hélio Peças', neighborhood: 'João de Deus', rating: 4.4, phone: '(98) 3244-4652', city: 'São Luís', state: 'MA' },
	{ id: 'ma-3', name: 'Bike Mania Motos', neighborhood: 'Turu', rating: 4.4, phone: '(98) 97001-6265', city: 'São Luís', state: 'MA' },

	// Teresina / PI
	{ id: 'pi-1', name: 'ConsertaBike Teresina', neighborhood: 'Lourival Parente', rating: 4.8, phone: '(86) 99562-0649', city: 'Teresina', state: 'PI' },
	{ id: 'pi-2', name: 'Bicycle and Co.', neighborhood: 'São João', rating: 4.3, phone: '(86) 3233-5280', city: 'Teresina', state: 'PI' },
	{ id: 'pi-3', name: 'Houston Bike do Nordeste', neighborhood: 'Distrito Industrial', rating: 4.4, phone: '(86) 3131-7600', city: 'Teresina', state: 'PI' },

	// Aracaju / SE
	{ id: 'se-1', name: 'RR Bike', neighborhood: 'Santos Dumont', rating: 4.5, reviewsCount: 246, phone: '(79) 98126-9516', city: 'Aracaju', state: 'SE' },
	{ id: 'se-2', name: 'Pedalando', neighborhood: 'Ponto Novo', rating: 4.3, phone: '(79) 99678-9663', city: 'Aracaju', state: 'SE' },

	// Cuiabá / MT
	{ id: 'mt-1', name: 'S2 Bike Shop', neighborhood: 'Santa Marta', rating: 5.0, phone: '(65) 99241-1193', city: 'Cuiabá', state: 'MT' },
	{ id: 'mt-2', name: 'Hobby Bikers', neighborhood: 'Santa Marta', rating: 4.7, phone: '(65) 3054-4590', city: 'Cuiabá', state: 'MT' },
	{ id: 'mt-3', name: 'Mega Scooter Cuiabá', neighborhood: 'Areão', rating: 4.3, phone: '(65) 99809-7646', city: 'Cuiabá', state: 'MT' },

	// Campo Grande / MS
	{ id: 'ms-1', name: 'EletricMove Watts', neighborhood: 'Jardim São Lourenço', rating: 4.9, phone: '(67) 3222-1267', city: 'Campo Grande', state: 'MS' },
	{ id: 'ms-2', name: 'ConsertaBike Campo Grande', neighborhood: 'Centro', rating: 4.9, phone: '(67) 98447-1017', city: 'Campo Grande', state: 'MS' },
	{ id: 'ms-3', name: 'Bike Elétrica SAAD', neighborhood: 'Centro', rating: 4.6, phone: '(67) 99240-9524', city: 'Campo Grande', state: 'MS' },

	// Palmas / TO
	{ id: 'to-1', name: 'New Bike Palmas', neighborhood: 'Plano Diretor Norte', rating: 4.9, phone: '(63) 98400-4402', city: 'Palmas', state: 'TO' },
	{ id: 'to-2', name: 'Giro Bike\'s', neighborhood: 'Plano Diretor Sul', rating: 4.9, phone: '(63) 99263-6599', city: 'Palmas', state: 'TO' },
	{ id: 'to-3', name: 'CiclomiX', neighborhood: 'Plano Diretor Norte', rating: 4.7, phone: '(63) 3224-2111', city: 'Palmas', state: 'TO' },

	// Macapá / AP
	{ id: 'ap-1', name: 'Bike City', neighborhood: 'Alvorada', rating: 5.0, phone: '(96) 99132-2552', city: 'Macapá', state: 'AP' },
	{ id: 'ap-2', name: 'Real Peças Bike & Moto', neighborhood: 'Trem', rating: 4.5, phone: '(96) 98113-9391', city: 'Macapá', state: 'AP' },
	{ id: 'ap-3', name: 'MegaBike', neighborhood: 'Julião Ramos', rating: 4.4, phone: '(96) 3217-5468', city: 'Macapá', state: 'AP' },

	// Porto Velho / RO
	{ id: 'ro-1', name: 'RV Bikes & Elétricas', neighborhood: 'Caladinho', rating: 4.9, phone: '(69) 99326-5441', city: 'Porto Velho', state: 'RO' },
	{ id: 'ro-2', name: 'Stock Bike', neighborhood: 'Eldorado', rating: 4.9, phone: '(69) 98404-2021', city: 'Porto Velho', state: 'RO' },
	{ id: 'ro-3', name: 'HC Bikes Elétricas', neighborhood: 'Nova Porto Velho', rating: 4.2, phone: '(69) 99205-5000', city: 'Porto Velho', state: 'RO' },

	// Rio Branco / AC
	{ id: 'ac-1', name: 'Raio Ciclo', neighborhood: 'Triângulo Velho', rating: 4.2, phone: '(68) 98427-4740', city: 'Rio Branco', state: 'AC' },
	{ id: 'ac-2', name: 'CG Comercial Nações', neighborhood: 'Bosque', rating: 4.2, phone: '(68) 99989-3579', city: 'Rio Branco', state: 'AC' },

	// Boa Vista / RR
	{ id: 'rr-1', name: 'Israel Bike Peças', neighborhood: 'Tancredo Neves', rating: 4.7, reviewsCount: 96, phone: '(95) 3625-2512', city: 'Boa Vista', state: 'RR' },
	{ id: 'rr-2', name: 'Bryan Bike\'s', neighborhood: 'Tancredo Neves', rating: 4.7, phone: '(95) 99136-2321', city: 'Boa Vista', state: 'RR' },
	{ id: 'rr-3', name: 'Mercadão das Bicicletas e Motos', neighborhood: 'Centro', rating: 4.0, phone: '(95) 3224-0565', city: 'Boa Vista', state: 'RR' },
];

// Mapeamento dos estados e seus nomes completos
const STATE_NAMES: Record<string, string> = {
	SP: 'São Paulo',
	RJ: 'Rio de Janeiro',
	MG: 'Minas Gerais',
	DF: 'Distrito Federal',
	PR: 'Paraná',
	RS: 'Rio Grande do Sul',
	BA: 'Bahia',
	CE: 'Ceará',
	PE: 'Pernambuco',
	SC: 'Santa Catarina',
	AM: 'Amazonas',
	PA: 'Pará',
	GO: 'Goiás',
	ES: 'Espírito Santo',
	RN: 'Rio Grande do Norte',
	PB: 'Paraíba',
	AL: 'Alagoas',
	MA: 'Maranhão',
	PI: 'Piauí',
	SE: 'Sergipe',
	MT: 'Mato Grosso',
	MS: 'Mato Grosso do Sul',
	TO: 'Tocantins',
	AP: 'Amapá',
	RO: 'Rondônia',
	AC: 'Acre',
	RR: 'Roraima'
};

// Mapeamento de cor suave ou destaque
const REGIONS: Record<string, string[]> = {
	Sudeste: ['SP', 'RJ', 'MG', 'ES'],
	Sul: ['PR', 'SC', 'RS'],
	'Centro-Oeste': ['DF', 'GO', 'MT', 'MS'],
	Nordeste: ['BA', 'CE', 'PE', 'RN', 'PB', 'AL', 'MA', 'PI', 'SE'],
	Norte: ['AM', 'PA', 'TO', 'AP', 'RO', 'AC', 'RR']
};

export default function AssistancePage() {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedState, setSelectedState] = useState<string>('ALL');
	const [activeRegion, setActiveRegion] = useState<string>('ALL');

	// Formulário "Seja um parceiro"
	const [partnerFormData, setPartnerFormData] = useState({
		shopName: '',
		contactName: '',
		email: '',
		phone: '',
		city: '',
		state: 'SP',
		message: ''
	});
	const [isSubmittingPartner, setIsSubmittingPartner] = useState(false);
	const [partnerSubmittedSuccess, setPartnerSubmittedSuccess] = useState(false);

	// FAQ
	const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);



	// Helper para abrir rota no Google Maps
	const getGoogleMapsLink = (name: string, city: string, state: string) => {
		const query = encodeURIComponent(`${name}, ${city} - ${state}, Brasil`);
		return `https://www.google.com/maps/search/?api=1&query=${query}`;
	};

	// Filtragem inteligente baseada na busca e nos estados/regiões selecionadas
	const filteredLocations = useMemo(() => {
		return LOCATIONS_DATA.filter((loc) => {
			// Filtro de região
			if (activeRegion !== 'ALL') {
				const statesInRegion = REGIONS[activeRegion] || [];
				if (!statesInRegion.includes(loc.state)) return false;
			}

			// Filtro de estado
			if (selectedState !== 'ALL' && loc.state !== selectedState) {
				return false;
			}

			// Filtro de termo de busca
			if (searchTerm.trim() !== '') {
				const term = searchTerm.toLowerCase();
				const stateFullName = (STATE_NAMES[loc.state] || '').toLowerCase();
				return (
					loc.name.toLowerCase().includes(term) ||
					loc.neighborhood.toLowerCase().includes(term) ||
					loc.city.toLowerCase().includes(term) ||
					loc.state.toLowerCase().includes(term) ||
					stateFullName.includes(term)
				);
			}

			return true;
		});
	}, [searchTerm, selectedState, activeRegion]);

	// Lista única ordenada dos estados com postos cadastrados
	const availableStates = useMemo(() => {
		const statesSet = new Set(LOCATIONS_DATA.map((loc) => loc.state));
		return Array.from(statesSet).sort();
	}, []);

	// Total de unidades em cada estado para exibir nos badges
	const stateCounts = useMemo(() => {
		const counts: Record<string, number> = {};
		LOCATIONS_DATA.forEach((loc) => {
			counts[loc.state] = (counts[loc.state] || 0) + 1;
		});
		return counts;
	}, []);

	// Envio de formulário de parceiro simulado
	const handlePartnerSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmittingPartner(true);
		setTimeout(() => {
			setIsSubmittingPartner(false);
			setPartnerSubmittedSuccess(true);
			setPartnerFormData({
				shopName: '',
				contactName: '',
				email: '',
				phone: '',
				city: '',
				state: 'SP',
				message: ''
			});
			setTimeout(() => {
				setPartnerSubmittedSuccess(false);
			}, 6000);
		}, 1500);
	};

	const faqData = [
		{
			q: 'A assistência técnica cobre reparos dentro da garantia?',
			a: 'Sim. Os centros técnicos credenciados realizam o diagnóstico e reparos cobertos pela nossa garantia de fábrica, utilizando peças de reposição oficiais enviadas diretamente por nós, sem custos de peças para o cliente em danos não causados por mau uso.'
		},
		{
			q: 'Minha e-bike Engwe precisa de manutenção periódica?',
			a: 'Sim, recomendamos uma revisão básica a cada 500 km ou 6 meses para lubrificação de correntes, calibragem de pneus, ajustes nos cabos de freio mecânicos ou sangria hidráulica e verificação de reapertos estruturais.'
		},
		{
			q: 'Posso fazer a manutenção normal em qualquer oficina de bicicletas?',
			a: 'Para ajustes puramente mecânicos (freios comuns, pneus, correntes, guidão e câmbio Shimano), você pode utilizar qualquer oficina de confiança da sua região. Contudo, intervenções no motor, sistema elétrico, controlador ou bateria devem ser realizadas apenas por oficinas credenciadas para evitar a perda da garantia.'
		},
		{
			q: 'Como funciona a substituição da bateria em caso de desgaste?',
			a: 'A bateria é um item de desgaste contínuo. Nossas assistências técnicas parceiras estão plenamente capacitadas para testar a saúde da sua célula de lítio e efetuar a troca de forma segura. Baterias oficiais de reposição podem ser encomendadas através do nosso suporte central.'
		},
		{
			q: 'Não há nenhuma assistência técnica na minha cidade. O que fazer?',
			a: 'Caso sua cidade não possua assistência credenciada, entre em contato direto com o nosso Suporte Central Oficial pelo WhatsApp (21) 97943-7798. Auxiliaremos no diagnóstico remoto e, caso necessário, poderemos credenciar temporariamente uma oficina de sua confiança em sua localidade para realizar o reparo com peças fornecidas por nós.'
		}
	];

	return (
		<main className="min-h-screen bg-zinc-50/50">
			<NavbarNested />

			{/* --- HERO SECTION --- */}
			<section className="relative pt-32 pb-20 overflow-hidden bg-zinc-900 text-white">
				{/* Background Gradients */}
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.15),transparent_50%)]" />
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(24,24,27,0.8),transparent)]" />
				<div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-50/50 to-transparent pointer-events-none" />

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="max-w-3xl">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-semibold mb-6"
						>
							<Wrench className="w-3.5 h-3.5" />
							<span>Suporte Oficial Engwe Brasil</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="font-display text-4xl md:text-6xl font-bold leading-tight font-space tracking-tight"
						>
							Rede Credenciada de <span className="text-orange-500 bg-clip-text">Assistência Técnica</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="mt-6 text-zinc-400 text-lg md:text-xl leading-relaxed font-sans"
						>
							Encontre o centro de serviço mais próximo de você. Temos mais de <strong className="text-white">60 pontos credenciados</strong> de suporte e manutenção especializados em e-bikes por todo o território nacional.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className="mt-8 flex flex-col sm:flex-row gap-4"
						>
							<a
								href="#localizador"
								className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-medium rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
							>
								Buscar Oficina
							</a>
							<a
								href="https://wa.me/5521979437798"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center px-6 py-3 bg-zinc-800 text-zinc-200 border border-zinc-700 font-medium rounded-xl hover:bg-zinc-700 hover:text-white transition-colors gap-2"
							>
								<Phone className="w-4 h-4 text-green-500" />
								Suporte Central: (21) 97943-7798
							</a>
						</motion.div>
					</div>
				</div>
			</section>

			{/* --- LOCALIZADOR E FILTROS --- */}
			<section id="localizador" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="bg-white rounded-3xl border border-zinc-100 p-6 md:p-8 shadow-xl shadow-zinc-100/50">

					{/* Header do Localizador */}
					<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-zinc-100 mb-8">
						<div>
							<h2 className="text-2xl font-bold font-space text-zinc-900">Encontre o Suporte Ideal</h2>
							<p className="text-sm text-zinc-500 mt-1">Filtre por estado ou pesquise pela cidade/bairro</p>
						</div>

						{/* Campo de Busca */}
						<div className="relative w-full md:w-96">
							<Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
							<input
								type="text"
								placeholder="Buscar por cidade, bairro, loja..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm font-sans"
							/>
							{searchTerm && (
								<button
									onClick={() => setSearchTerm('')}
									className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-zinc-400 hover:text-zinc-600 bg-zinc-200/50 px-1.5 py-0.5 rounded"
								>
									Limpar
								</button>
							)}
						</div>
					</div>

					{/* Filtros de Regiões */}
					<div className="mb-6">
						<h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">Filtrar por Região</h3>
						<div className="flex flex-wrap gap-2">
							<button
								onClick={() => { setActiveRegion('ALL'); setSelectedState('ALL'); }}
								className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${activeRegion === 'ALL'
									? 'bg-zinc-900 text-white shadow-md'
									: 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200/70'
									}`}
							>
								Todas as Regiões
							</button>
							{Object.keys(REGIONS).map((region) => (
								<button
									key={region}
									onClick={() => {
										setActiveRegion(region);
										setSelectedState('ALL'); // Reseta estado específico para ver a região inteira
									}}
									className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${activeRegion === region
										? 'bg-orange-500 text-white shadow-md'
										: 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200/70'
										}`}
								>
									{region}
								</button>
							))}
						</div>
					</div>

					{/* Filtros rápidos de Estado (UFs) */}
					<div className="mb-8">
						<h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">Selecione o Estado (UF)</h3>
						<div className="flex flex-wrap gap-2 max-h-36 overflow-y-auto p-1 border border-zinc-100 rounded-xl bg-zinc-50/50 scrollbar-thin">
							<button
								onClick={() => setSelectedState('ALL')}
								className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${selectedState === 'ALL'
									? 'bg-orange-500 text-white font-semibold'
									: 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200'
									}`}
							>
								Todos ({LOCATIONS_DATA.length})
							</button>
							{availableStates.map((uf) => {
								// Se houver filtro de região ativo, oculta estados fora da região
								if (activeRegion !== 'ALL' && !REGIONS[activeRegion]?.includes(uf)) return null;

								return (
									<button
										key={uf}
										onClick={() => setSelectedState(uf)}
										className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${selectedState === uf
											? 'bg-orange-500 text-white font-semibold shadow-sm'
											: 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200'
											}`}
									>
										<span>{uf}</span>
										<span className={`text-[10px] px-1 rounded-md ${selectedState === uf ? 'bg-orange-600 text-white' : 'bg-zinc-100 text-zinc-500'}`}>
											{stateCounts[uf] || 0}
										</span>
									</button>
								);
							})}
						</div>
					</div>

					{/* Contador e Resultados */}
					<div className="flex items-center justify-between mb-6">
						<div className="text-zinc-600 text-sm">
							Encontrados <strong className="text-zinc-900 font-semibold">{filteredLocations.length}</strong> pontos de assistência
							{selectedState !== 'ALL' && <span> em <strong className="text-orange-600">{STATE_NAMES[selectedState]} ({selectedState})</strong></span>}
							{activeRegion !== 'ALL' && selectedState === 'ALL' && <span> na região <strong className="text-orange-600">{activeRegion}</strong></span>}
						</div>

						{(selectedState !== 'ALL' || activeRegion !== 'ALL' || searchTerm !== '') && (
							<button
								onClick={() => {
									setSelectedState('ALL');
									setActiveRegion('ALL');
									setSearchTerm('');
								}}
								className="text-xs text-orange-500 hover:text-orange-600 font-semibold flex items-center gap-1"
							>
								Remover todos os filtros
							</button>
						)}
					</div>

					{/* Grid dos Cards de Assistência */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<AnimatePresence mode="popLayout">
							{filteredLocations.map((loc) => (
								<motion.div
									layout
									initial={{ opacity: 0, scale: 0.95 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.95 }}
									transition={{ duration: 0.25 }}
									key={loc.id}
									className="group bg-white p-6 rounded-2xl border border-zinc-100 hover:border-orange-500/20 hover:shadow-xl hover:shadow-orange-500/[0.04] transition-all duration-300 flex flex-col justify-between"
								>
									<div>
										{/* Header do Card (UF + Cidade + Avaliação) */}
										<div className="flex items-center justify-between mb-4">
											<div className="flex items-center gap-2">
												<span className="bg-orange-50 text-orange-600 font-bold text-xs px-2 py-0.5 rounded-lg border border-orange-100">
													{loc.state}
												</span>
												<span className="text-xs font-semibold text-zinc-500">
													{loc.city}
												</span>
											</div>

											{loc.rating && (
												<div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-0.5 rounded-lg text-xs font-bold border border-amber-100/50">
													<Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
													<span>{loc.rating.toFixed(1)}</span>
													{loc.reviewsCount && (
														<span className="text-[10px] text-amber-600 font-normal">
															({loc.reviewsCount})
														</span>
													)}
												</div>
											)}
										</div>

										{/* Nome da Loja */}
										<h4 className="font-space text-lg font-bold text-zinc-900 group-hover:text-orange-500 transition-colors mb-2 line-clamp-1">
											{loc.name}
										</h4>

										{/* Bairro / Localização */}
										<div className="flex items-start gap-1.5 text-zinc-500 text-xs mb-6">
											<MapPin className="w-3.5 h-3.5 mt-0.5 text-zinc-400 flex-shrink-0" />
											<span className="line-clamp-2">Bairro: {loc.neighborhood}</span>
										</div>
									</div>

									{/* Ações */}
									<div className="mt-auto">
										{/* Como Chegar */}
										<a
											href={getGoogleMapsLink(loc.name, loc.city, loc.state)}
											target="_blank"
											rel="noopener noreferrer"
											className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-zinc-900 text-white hover:bg-orange-500 rounded-xl transition-all text-xs font-semibold"
										>
											<span>Como Chegar</span>
											<ExternalLink className="w-3 h-3 text-zinc-300" />
										</a>
									</div>
								</motion.div>
							))}
						</AnimatePresence>

						{/* Empty State */}
						{filteredLocations.length === 0 && (
							<div className="col-span-full py-16 text-center bg-zinc-50 rounded-2xl border border-zinc-100">
								<Store className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
								<h4 className="text-lg font-bold text-zinc-800 font-space">Nenhuma assistência encontrada</h4>
								<p className="text-zinc-500 text-sm mt-1 max-w-md mx-auto">
									Tente ajustar a busca digitando outros bairros ou remova os filtros de estado.
								</p>
								<button
									onClick={() => {
										setSelectedState('ALL');
										setActiveRegion('ALL');
										setSearchTerm('');
									}}
									className="mt-4 px-4 py-2 bg-orange-500 text-white text-xs font-semibold rounded-lg hover:bg-orange-600 transition-colors"
								>
									Resetar Filtros
								</button>
							</div>
						)}
					</div>
				</div>
			</section>

			{/* --- SEÇÃO DE SUPORTE EXTRA E AVISO --- */}
			<section className="py-12 bg-white border-y border-zinc-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-orange-50 rounded-3xl p-6 md:p-10 border border-orange-100 flex flex-col lg:flex-row items-center justify-between gap-8">
						<div className="flex items-start gap-4">
							<div className="w-12 h-12 bg-orange-500 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/20">
								<ShieldCheck className="w-6 h-6" />
							</div>
							<div>
								<h3 className="font-space text-xl font-bold text-zinc-900">Precisa acionar a garantia da sua E-Bike?</h3>
								<p className="text-zinc-600 text-sm mt-2 max-w-2xl leading-relaxed font-sans">
									Se o seu componente apresentou defeito e está dentro do período de cobertura de garantia (ex: motor, display, bateria ou quadro), envie-nos fotos/vídeos explicativos para o e-mail oficial de suporte antes de agendar na oficina credenciada.
								</p>
							</div>
						</div>

						<a
							href="/garantia"
							className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm whitespace-nowrap shadow-lg shadow-zinc-900/10"
						>
							<span>Ver Política de Garantia</span>
							<ArrowRight className="w-4 h-4" />
						</a>
					</div>
				</div>
			</section>

			{/* --- FORMULÁRIO DE SEJA UM PARCEIRO CREDENCIADO --- */}
			<section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

					{/* Informações da esquerda */}
					<div className="lg:col-span-5 space-y-6">
						<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 text-orange-600 text-xs font-bold">
							<Sparkles className="w-3.5 h-3.5" />
							<span>Parceria Engwe</span>
						</div>
						<h2 className="font-space text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
							Tem uma Bike Shop? Seja nosso <span className="text-orange-500">Parceiro Oficial</span>
						</h2>
						<p className="text-zinc-600 leading-relaxed font-sans text-sm md:text-base">
							A demanda por e-bikes cresce exponencialmente no Brasil. Ao se tornar uma assistência técnica oficial Engwe, sua loja ganha visibilidade no nosso mapa oficial, atrai novos clientes para revisões pagas e garante acesso exclusivo a peças de reposição originais e treinamentos técnicos dedicados.
						</p>

						<ul className="space-y-3 pt-4">
							{[
								'Apareça no mapa do nosso site oficial de vendas',
								'Acesso prioritário para compra de baterias e peças originais',
								'Treinamento e material técnico especializado',
								'Indicação direta de clientes da sua região'
							].map((benefit, idx) => (
								<li key={idx} className="flex items-center gap-2 text-zinc-700 text-sm font-medium">
									<div className="w-5 h-5 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
										<Check className="w-3.5 h-3.5" />
									</div>
									<span>{benefit}</span>
								</li>
							))}
						</ul>
					</div>

					{/* Card do formulário à direita */}
					<div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-zinc-100 shadow-xl shadow-zinc-100/50">
						<h3 className="font-space text-xl font-bold text-zinc-900 mb-6">Candidate sua Oficina</h3>

						<form onSubmit={handlePartnerSubmit} className="space-y-4">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Nome da Bike Shop</label>
									<input
										type="text"
										required
										value={partnerFormData.shopName}
										onChange={(e) => setPartnerFormData({ ...partnerFormData, shopName: e.target.value })}
										placeholder="Ex: Ciclo Velo Jardim"
										className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
									/>
								</div>
								<div>
									<label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Nome do Responsável</label>
									<input
										type="text"
										required
										value={partnerFormData.contactName}
										onChange={(e) => setPartnerFormData({ ...partnerFormData, contactName: e.target.value })}
										placeholder="Ex: Carlos Silva"
										className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
									/>
								</div>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">E-mail de Contato</label>
									<input
										type="email"
										required
										value={partnerFormData.email}
										onChange={(e) => setPartnerFormData({ ...partnerFormData, email: e.target.value })}
										placeholder="Ex: contato@bikeshop.com.br"
										className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
									/>
								</div>
								<div>
									<label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">WhatsApp / Telefone</label>
									<input
										type="tel"
										required
										value={partnerFormData.phone}
										onChange={(e) => setPartnerFormData({ ...partnerFormData, phone: e.target.value })}
										placeholder="Ex: (11) 99999-9999"
										className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
									/>
								</div>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Cidade</label>
									<input
										type="text"
										required
										value={partnerFormData.city}
										onChange={(e) => setPartnerFormData({ ...partnerFormData, city: e.target.value })}
										placeholder="Ex: Sorocaba"
										className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
									/>
								</div>
								<div>
									<label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Estado (UF)</label>
									<select
										value={partnerFormData.state}
										onChange={(e) => setPartnerFormData({ ...partnerFormData, state: e.target.value })}
										className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
									>
										{Object.keys(STATE_NAMES).map((uf) => (
											<option key={uf} value={uf}>{uf} - {STATE_NAMES[uf]}</option>
										))}
									</select>
								</div>
							</div>

							<div>
								<label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Descreva sua experiência com e-bikes</label>
								<textarea
									rows={3}
									value={partnerFormData.message}
									onChange={(e) => setPartnerFormData({ ...partnerFormData, message: e.target.value })}
									placeholder="Conte-nos brevemente se você já realiza serviços elétricos ou mecânicos em bicicletas..."
									className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none"
								/>
							</div>

							<button
								type="submit"
								disabled={isSubmittingPartner}
								className="w-full py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 text-sm shadow-lg shadow-orange-500/10"
							>
								{isSubmittingPartner ? 'Enviando Proposta...' : 'Enviar Solicitação de Parceria'}
							</button>

							<AnimatePresence>
								{partnerSubmittedSuccess && (
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0 }}
										className="p-4 bg-green-50 text-green-800 text-xs rounded-xl border border-green-200 flex items-start gap-2"
									>
										<Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
										<div>
											<strong className="font-bold block mb-0.5">Proposta Recebida com Sucesso!</strong>
											Nossa equipe de parcerias e credenciamento analisará os dados da sua bike shop e entrará em contato via WhatsApp/E-mail dentro de 48 horas úteis. Obrigado pelo interesse!
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</form>
					</div>

				</div>
			</section>

			{/* --- PERGUNTAS FREQUENTES (FAQ) --- */}
			<section className="py-20 bg-zinc-50/80 border-t border-zinc-100">
				<div className="max-w-4xl mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="font-space text-3xl font-bold text-zinc-900">Perguntas Frequentes sobre Assistência</h2>
						<p className="text-zinc-500 text-sm mt-2">Dúvidas comuns sobre revisões, garantia oficial e suporte elétrico</p>
					</div>

					<div className="space-y-4">
						{faqData.map((faq, idx) => (
							<div
								key={idx}
								className="bg-white rounded-2xl border border-zinc-100 overflow-hidden transition-all shadow-sm"
							>
								<button
									onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
									className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-semibold text-zinc-800 hover:text-orange-500 transition-colors"
								>
									<span className="font-space text-sm md:text-base leading-snug">{faq.q}</span>
									{openFaqIndex === idx ? (
										<ChevronUp className="w-5 h-5 text-orange-500 flex-shrink-0" />
									) : (
										<ChevronDown className="w-5 h-5 text-zinc-400 flex-shrink-0" />
									)}
								</button>

								<AnimatePresence initial={false}>
									{openFaqIndex === idx && (
										<motion.div
											initial={{ height: 0 }}
											animate={{ height: 'auto' }}
											exit={{ height: 0 }}
											transition={{ duration: 0.2 }}
											className="overflow-hidden"
										>
											<div className="px-6 pb-6 pt-1 text-zinc-600 text-sm leading-relaxed border-t border-zinc-50 font-sans">
												{faq.a}
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}