export const MSTPUtils = {
	introduction:
		'W tej części omówiono elementy ulepszeń dodanych w ramach RSTP w porównaniu do poprzedniego standardu 802.1D. Standard 802.1D Spanning Tree Protocol (STP) został zaprojektowany w czasie, gdy przywrócenie łączności po przerwie w dostawie prądu w ciągu około minuty uznawano za wystarczającą wydajność.',

	definition:
		'Wraz z pojawieniem się przełączania warstwy 3 w środowiskach LAN, mostkowanie konkuruje teraz z rozwiązaniami routowanymi, w których protokoły, takie jak Open Shortest Path First (OSPF) i Enhanced Interior Gateway Routing Protocol (EIGRP), są w stanie zapewnić alternatywną ścieżkę w krótszym czasie. Firma Cisco ulepszyła oryginalną specyfikację 802.1D o funkcje, takie jak Uplink Fast , Backbone Fast i Port Fast, aby przyspieszyć czas konwergencji sieci z mostem. Wadą jest to, że te mechanizmy są zastrzeżone i wymagają dodatkowej konfiguracji. Protokół Rapid Spanning Tree (RSTP; IEEE 802.1w) może być postrzegany jako ewolucja standardu 802.1D, a nie rewolucja. Terminologia 802.1D pozostaje zasadniczo taka sama. Większość parametrów pozostała niezmieniona, więc użytkownicy zaznajomieni z 802.1D mogą szybko i wygodnie skonfigurować nowy protokół. W większości przypadków RSTP działa lepiej niż zastrzeżone rozszerzenia Cisco bez dodatkowej konfiguracji. W standardzie 802.1w można również powrócić do standardu 802.1D w celu współdziałania ze starszymi mostami w oparciu o port. Zmniejsza to korzyści, które wprowadza. Nowa edycja standardu 802.1D, IEEE 802.1D-2004, zawiera standardy IEEE 802.1t-2001 i IEEE 802.1w.',
};
