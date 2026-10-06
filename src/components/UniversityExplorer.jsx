import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  Search, 
  MapPin, 
  Award, 
  GraduationCap, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Calendar,
  Home,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Globe2
} from 'lucide-react';
import { UNIVERSITIES, CURRENCIES } from '../data/futureLinkData';

export default function UniversityExplorer({ 
  onSelectUniversity, 
  onApplyUniversity, 
  currentCurrency,
  searchFilter = null
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const cur = CURRENCIES[currentCurrency] || CURRENCIES.USD;
  const cities = ['All', 'Istanbul', 'Ankara'];
  const levels = ['All', "Bachelor's", "Master's", "PhD"];

  const filteredUniversities = useMemo(() => {
    return UNIVERSITIES.filter((uni) => {
      const matchesSearch = 
        uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.popularPrograms.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCity = selectedCity === 'All' || uni.city.toLowerCase() === selectedCity.toLowerCase();
      const matchesLevel = selectedLevel === 'All' || uni.degreeLevels.includes(selectedLevel);

      return matchesSearch && matchesCity && matchesLevel;
    }).sort((a, b) => {
      // Prioritize Istanbul Okan University (the featured benchmark from PDF Page 3)
      if (a.id === 'okan') return -1;
      if (b.id === 'okan') return 1;
      return 0;
    });
  }, [searchQuery, selectedCity, selectedLevel]);

  return (
    <section id="universities" className="py-20 sm:py-28 bg-slate-950 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>Accredited Partner Catalog</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
              Top Partner Universities in Turkey
            </h2>
            <p className="mt-2 text-slate-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Explore our official partner institutions. Complete profiles include campus details, programs, 
              tuition fees, accommodation, admission requirements, and direct application through Future Link.
            </p>
          </div>

          <div className="text-xs font-semibold text-slate-400">
            Showing <strong className="text-amber-400">{filteredUniversities.length}</strong> Universities
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mt-8 glass-panel rounded-2xl p-4 sm:p-5 border border-white/10 shadow-lg space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search university, program (e.g. Okan, Medipol, Medicine, Dentistry)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white/10"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* City Filters */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-slate-400 mr-1">City:</span>
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    selectedCity === city
                      ? 'bg-amber-400 text-slate-950 font-black'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>

            {/* Level Filters */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-slate-400 mr-1">Degree:</span>
              {levels.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    selectedLevel === lvl
                      ? 'bg-sky-500 text-white font-black'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Universities Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUniversities.map((uni) => {
            const minTuitionConverted = Math.round(uni.minTuitionUsd * cur.rate);
            const isOkan = uni.id === 'okan';

            return (
              <div
                key={uni.id}
                className={`glass-panel rounded-3xl border ${
                  isOkan ? 'border-amber-400/80 ring-2 ring-amber-400/20 shadow-2xl shadow-amber-400/10' : 'border-white/10 hover:border-amber-400/40'
                } overflow-hidden transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  
                  {/* Photo Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={uni.imageUrl}
                      alt={uni.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    {/* Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-bold text-amber-300 border border-amber-400/30">
                        {uni.ranking}
                      </span>
                      {isOkan && (
                        <span className="px-2.5 py-1 rounded-full bg-amber-400 text-slate-950 text-[11px] font-extrabold shadow-md">
                          ★ PDF Benchmark Model
                        </span>
                      )}
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-semibold text-slate-300 border border-white/15">
                        {uni.primaryLanguages.join(' & ')}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-[11px] text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                        <span>{uni.city}, Türkiye</span>
                      </span>
                      <h3 className="font-heading font-black text-xl text-white mt-0.5 leading-snug">
                        {uni.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content (Exact fields from PDF Page 3) */}
                  <div className="p-5 space-y-3.5 text-xs">
                    
                    {/* Introduction & Tagline */}
                    <p className="text-slate-300 leading-relaxed text-xs">
                      {uni.tagline}
                    </p>

                    {/* Programs Count & Degree Levels */}
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                      <span className="text-slate-400">Available Degrees:</span>
                      <span className="font-bold text-slate-200">{uni.degreeLevels.join(' • ')}</span>
                    </div>

                    {/* Popular Programs Tags */}
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase block mb-1.5">
                        Top Faculty Programs ({uni.programsCount}+ Total):
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {uni.popularPrograms.slice(0, 3).map((prog, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-slate-300 font-medium"
                          >
                            {prog}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Admission Requirements & Deadlines */}
                    <div className="pt-2 border-t border-white/10 space-y-1.5 text-[11px]">
                      <div className="flex items-start gap-1.5 text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong>Admission:</strong> {uni.requirements}</span>
                      </div>
                      <div className="flex items-start gap-1.5 text-slate-300">
                        <Home className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span><strong>Dormitories:</strong> {uni.accommodation}</span>
                      </div>
                    </div>

                    {/* Tuition & Scholarship Banner */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase block">Starting Fee</span>
                        <div className="flex items-baseline gap-1">
                          <span className="font-heading font-black text-lg text-white">
                            {cur.symbol}{minTuitionConverted.toLocaleString()}
                          </span>
                          <span className="text-[10px] text-slate-400">/ year</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="px-2 py-1 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-black block">
                          {uni.scholarshipRate}
                        </span>
                        <span className="text-[10px] text-slate-400 block mt-0.5">Direct Future Link Quota</span>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Card Actions (Exact button: "Apply through Future Link") */}
                <div className="p-4 bg-white/5 border-t border-white/10 flex items-center gap-2">
                  <button
                    onClick={() => onSelectUniversity(uni)}
                    className="flex-1 py-2.5 rounded-xl border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>View Profile</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  <button
                    onClick={() => onApplyUniversity(uni.name)}
                    className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 text-xs font-black transition flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Apply through Future Link</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
